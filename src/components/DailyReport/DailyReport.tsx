import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { CountUp } from "use-count-up";

import Typography from "../../components/Typography/Typography";
const thermometer = require("../../../assets/weather/thermometer.png");

type dailyReportDataProps = {
  climate: string;
  maxTemp: number;
  minTemp: number;
};

const DailyReport: React.FC<dailyReportDataProps> = (data) => {
  return (
    <View style={styles.reportContainer}>
      <View style={{ alignSelf: "flex-end" }}>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Clima: {data.climate}
        </Typography>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Máxima:{" "}
          <CountUp isCounting start={-10.0} end={data.maxTemp} duration={2.5} />
          °
        </Typography>
        <Typography style={styles.reportText} fontFamily="rajdhani" type={1}>
          Mínima:{" "}
          <CountUp isCounting start={-10.0} end={data.minTemp} duration={3.5} />
          °
        </Typography>
      </View>
      <Image style={styles.thermometer} source={thermometer} />
    </View>
  );
};

export default DailyReport;

const styles = StyleSheet.create({
  reportText: {
    color: "#555555",
  },
  reportContainer: {
    width: "100%",
    flexDirection: "row",
    marginLeft: 30,
    justifyContent: "space-between",
    paddingBottom: 10,
  },

  thermometer: {
    alignSelf: "center",
  },
});
