const Site = require('../models/Site');

exports.sites = async (req, res) => {
    try {
        const { userid } = req.body;

        const sites = await Site.find({ userid });
        if (sites) {
            return res.status(200).json({
                success: true,
                message: "found",
                sites: sites
            })
        }


        return res.status(200).json({
            success: true,
            message: "Yet no sites are created",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


exports.createsite = async (req, res) => {
    try {
        const { name, userid,subdomain, domain,canvasdata,project } = req.body;

        const response = await Site.create({ name, userid , subdomain, domain, canvasdata,project });
        return res.status(200).json({
            success: true,
            message: "Created"
        })


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


``
exports.deletesite = async (req, res) => {
    try {
        const { _id } = req.body;

        const response = await Site.findByIdAndDelete({ _id });
        return res.status(200).json({
            success: true,
            message: "Deleted"
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


exports.renamesite = async (req, res) => {
    try {
        const { _id, name } = req.body;

        const Siteinfo = await Site.findByIdAndUpdate(_id, { name });
        if (Siteinfo) {
            return res.status(200).json({
                success: true,
                message: "Renamed"
            })
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


exports.duplicateSite = async (req, res) => {
    try {
        const { _id } = req.body;

        const siteInfo = await Site.findById(_id);
        if (siteInfo) {
            // Remove _id so MongoDB can assign a new one
            const { _id, ...newSiteInfo } = siteInfo._doc;

            // Create a new document with the rest of the fields
            const response = await Site.create(newSiteInfo);

            
            return res.status(200).json({
                success: true,
                message: "Duplicate"
            })

        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.site = async (req, res) => {
    try {
        const { _id } = req.body;

        const site = await Site.find({ _id });
        if (site) {
            return res.status(200).json({
                success: true,
                message: "found",
                site: site
            })
        }


        return res.status(200).json({
            success: true,
            message: "No Site Found",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


exports.updatesubdomain = async (req, res) => {
    try {
        const { _id, subdomain } = req.body;

        const Siteinfo = await Site.findByIdAndUpdate(_id, { subdomain });
        if (Siteinfo) {
            return res.status(200).json({
                success: true,
                message: "Updated"
            })
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


exports.updatedomain = async (req, res) => {
    try {
        const { _id, domain } = req.body;

        const Siteinfo = await Site.findByIdAndUpdate(_id, { domain });
        if (Siteinfo) {
            return res.status(200).json({
                success: true,
                message: "Updated"
            })
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.updateproject = async (req, res) => {
    try {
        const { _id, project } = req.body;

        const parsedProject = JSON.parse(project); 

        const Siteinfo = await Site.findByIdAndUpdate(_id, {  project: parsedProject }, { new: true });
        if (Siteinfo) {
            return res.status(200).json(Siteinfo.project)
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.projectload = async (req, res) => {
    try {
        const { _id } = req.method === "POST" ? req.body : req.query;

        const sites = await Site.find({ _id });
        if (sites) {
            return res.status(200).json(sites[0].project)
        }


        return res.status(200).json({
            success: true,
            message: "Yet no sites are created",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.sitesbysubdomain = async (req, res) => {
    try {
        const { subdomain } = req.body;

        const sites = await Site.find({ subdomain });
        if (sites) {
            return res.status(200).json({
                success: true,
                message: "found",
                sites: sites
            })
        }


        return res.status(200).json({
            success: true,
            message: "Yet no sites are created",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.sitesbydomain = async (req, res) => {
    try {
        const { domain } = req.body;

        const sites = await Site.find({ domain });
        if (sites) {
            return res.status(200).json({
                success: true,
                message: "found",
                sites: sites
            })
        }


        return res.status(200).json({
            success: true,
            message: "Yet no sites are created",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}