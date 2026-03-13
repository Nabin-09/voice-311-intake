export const validateTicketPayload = (req, res, next) => {
    const { issueType, location, callerName } = req.body;
    const errors = [];

    if (!issueType) errors.push("issueType is required");
    if (!location) errors.push("location is required");
    if (!callerName) errors.push("callerName is required");

    if (errors.length > 0) {
        return res.status(400).json({ status: "error", message: errors.join(", ") });
    }
    next();
};