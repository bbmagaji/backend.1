const Profile = require('../models/profile.models');

const deleteProfile = async (req, res, next) => {
    try {
        const existingProfile = await Profile.findOne({
            user: req.user.id
        });

        if (!existingProfile) {
            return res.status(404).json({
                success: false,
                message: "Profile not found"
            });
        }

        await Profile.findthe Profile delete{
            user: req.user.id
        });

        res.status(200).json({
            success: true,
            message: "Profile deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {delete profile}