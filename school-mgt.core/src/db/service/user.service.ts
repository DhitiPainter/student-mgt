import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { jwtSecret } from './../../common/constant';
import db from './../../db/helper';
import mongoose from 'mongoose';
const UserModel = db.User;
const UserDetailsModel = db.UserDetails;
const ClassSectionModel = db.ClassSection;

export async function authenticate(userObject: User) {
    let user: User = null;

    return UserModel.findOne({ userName: userObject.userName }).exec().then((res: any) => {
        if (res) {
            user = {
                firstName: res.firstName,
                hash: res.hash,
                id: res.id,
                lastName: res.lastName,
                role: res.role,
                userName: res.userName,
            };
            if (user && userObject.password && bcrypt.compareSync(userObject.password, user.hash)) {
                const token = jwt.sign({ sub: user.id }, jwtSecret);
                return { user, token, isAuthenticated: true, message: 'Logged in successfully!' };
            }
        } else {
            return { user: null, token: null, isAuthenticated: false, message: 'Invalid credentials' };
        }
    });
}

export async function getAll() {
    return await UserModel.find().select('-hash');
}

export async function getById(id: any) {
    let profile: any = {};
    return UserModel.findById(id).select('-hash').select('-__v').then((userData: any) => {
        profile = userData.toObject();
        if (userData.userDetails) {
            return UserDetailsModel.findById(userData.userDetails).select('-__v').then((ud: any) => {
                profile.userDetails = ud.toObject();
                if (ud.class) {
                    return ClassSectionModel.findById(ud.class).select('-__v').then((c: any) => {
                        profile.userDetails.class = c.toObject();
                        return { profile: profile };
                    })
                } else {
                    return { profile: profile };
                }
            })
        } else {
            return { profile: profile };
        }
    })
}

export async function create(userParam: User) {
    // validate
    return UserModel.findOne({ userName: userParam.userName }).exec().then((res: any) => {
        if (res) {
            return { isUserExists: true };
        }
    }).then((isUserExists: any) => {
        if (isUserExists) {
            return { message: 'Username "' + userParam.userName + '" is already taken', isUserExists: true };
        }
        const user: any = new UserModel(userParam);
        // hash password
        if (userParam.password) {
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }
        // Set createdBy is not there
        user.createdBy = user._id
        // save user                
        user.save();
        return { message: 'User "' + userParam.userName + '" created successfully', isUserExists: false };
    });
}

export async function update(id: any, userParam: any, token: string) {
    return UserModel.findById(mongoose.Types.ObjectId(id)).then((userData: any) => {
        let userDetailsId: any;
        if (userData) {
            if (userData.userDetails) {
                userDetailsId = userData.userDetails;
                // Find user details data                
                return UserDetailsModel.findById(mongoose.Types.ObjectId(userDetailsId)).then((userDetailsData: any) => {
                    if (userDetailsData) {
                        const userDetail: any = new UserDetailsModel(userDetailsData);
                        let classId: any = userDetailsData.class;
                        // Find class section data                        
                        return ClassSectionModel.findById(mongoose.Types.ObjectId(classId)).then((classData: any) => {
                            // Create classSectionModel regardless of data present
                            const classSection = new ClassSectionModel(classData)
                            Object.assign(classSection, userParam.userDetails.class);
                            Object.assign(userDetail, userParam.userDetails);

                            classId = userDetail.class ? userDetail.class : classSection._id;
                            // Assign classSection's ObjectId
                            userDetail.class = mongoose.Types.ObjectId(classId);

                            // Update collection documents
                            classSection.save();
                            userDetail.save();
                            return updateUser(userData, userParam, id, userDetailsId, userDetail, classSection);
                        })
                    }
                });
            }
            else {
                // Add Class Section to collection
                const classSection = new ClassSectionModel(userParam.userDetails.class);

                // Add User Details to collection with classSection objectId            
                const userDetails: any = new UserDetailsModel(userParam.userDetails);

                // Assign objectIds to respective collection documents
                userDetails.class = classSection._id;
                userDetailsId = userDetails._id;

                // Create/update collection documents
                classSection.save();
                userDetails.save();
                return updateUser(userData, userParam, id, userDetailsId, userDetails, classSection);
            }
        }
    });
}

function updateUser(userData: any, userParam: any, userId: any, userDetailsId: any, userDetails: any, classSection: any): any {
    const user: any = new UserModel(userData);
    // copy userParam properties to user            
    Object.assign(user, userParam);

    // Update document values
    user.userDetails = userDetailsId
    user.updatedBy = userId;
    user.updatedDate = new Date();

    // Update document
    return user.save().then((userModel: any) => {
        let profile: any = {};
        profile = userModel.toObject();
        profile.userDetails = userDetails.toObject();
        profile.userDetails.class = classSection.toObject();
        return { message: "Data updated successfully", userProfile: profile };
    }, (err: any) => {
        console.log(err);
        return { message: "Internal server error occurred" };
    });
}

export async function _delete(id: number) {
    await UserModel.findByIdAndRemove(id);
}
