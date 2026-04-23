const showService = require("../services/show.service");

// create show: Admin
exports.createShow = async(req,res,next) => {
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"show created successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Get shows
exports.getShows = async(req,res,next) => {
    try{
        const shows = await showService.getShows(req.query);
        res.status(200).json({
            success:true,
            message:"shows created successfully",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};

// Get single show
exports.getShowById = async(req,res,next) => {
    try{
        const show = await showService.getShowById(req.params.id);
        res.status(200).json({
            success:true,
            message:"show fetched successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Update show
exports.updateShow = async(req,res,next) => {
    try{
        const show = await showService.updateShow(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"show updated successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Delete show - admin
exports.deleteShow = async(req,res,next) => {
    try{
        await showService.deleteShow(req.params.id);
        res.status(200).json({
            success:true,
            message:"show deleted successfully",
        });
    }
    catch(error){
        next(error);
    }
};