const ChartDashboard = require("../models/dataModel");

exports.getAllData = async (req, res) => {
  try {
    const allData = await ChartDashboard.find({});

    res.status(200).json({
      status: "success",
      data: {
        allData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "something went wrong! please try again later.",
    });
  }
};
