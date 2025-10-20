import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import FullSystem from "./FullSystem";

gsap.registerPlugin(ScrollTrigger);

const ScrollDrawSVG: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "+=100 bottom",
          end: "+=500 top",
          scrub: true,
          invalidateOnRefresh: true
        },
      });
    });
     // Refresh ScrollTrigger after animations are created
        ScrollTrigger.refresh();
  }, [svgRef]);
  

  return (
    <div className="flex justify-center py-40">
              <svg ref={svgRef}  width="100%" height="100%" viewBox="0 0 4733 4602" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns:serif="http://www.serif.com/" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10" }}>
    <g id="Artboard1">
    </g>
    <g id="Artboard2">
    </g>
    <g id="Artboard3" transform="matrix(0.58547,0,0,0.826986,-2816.96,-220.115)">
        <rect x="4811.45" y="266.165" width="8084.05" height="5563.98" style={{ fill: "none" }}/>
        <g id="Artboard11"  transform="matrix(1.70803,0,0,1.20921,4447.57,3519.35)">
            <g>
                <g>
                    <g>
                        <path d="M1028.96,1863.24L367.708,1481.47L367.708,1456.89" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M367.708,1456.89L367.708,1444.43" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M367.708,1444.43L367.708,1400.33" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M367.708,1400.33L367.708,1387.86" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M367.708,1387.86L367.708,1363.29" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1833.67L1028.96,1826.2" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1826.2L1028.96,1782.1" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1782.1L1028.96,1769.64" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1768.22L1028.96,1745.06" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1769.64L1028.96,1768.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1863.24L1028.96,1838.67" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1838.67L1028.96,1833.67" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1130.92,1804.15L1130.92,1779.81" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1130.92,1779.81L1130.92,1767.34" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1130.92,1767.34L1130.92,1723.24" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1130.92,1723.24L1130.92,1710.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1130.92,1710.78L1130.92,1686.2" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1745.06L1050.25,1732.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1050.25,1732.78L1099.23,1704.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1099.23,1704.49L1110.03,1698.26" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1110.03,1698.26L1130.92,1686.2" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M368.865,1363.27L389.551,1351.32" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M389.551,1351.32L400.347,1345.09" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M400.347,1345.09L438.538,1323.04" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M438.538,1323.04L449.333,1316.81" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M449.333,1316.81L471.376,1304.08" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1863.24L1321.52,1694.33" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1028.96,1745.06L367.708,1363.29" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1130.92,1685.97L675.787,1422.44" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                    </g>
                </g>
                <path d="M1145.7,1694.48L1145.7,1598.23" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M573.59,1363.27L573.59,1267.02" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M456.851,1295.67L456.851,1199.42" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1626.88L1028.96,1595" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1595L1028.96,1594.62" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1594.62L1028.96,1594.24" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1594.24L1028.96,1590.76" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1590.76L1028.96,1588.63" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1588.63L1028.96,1578.77" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1578.77L1028.96,1530.64" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.91,951.001L1492.91,950.817" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.91,858.947L1492.91,832.707" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.91,950.817L1492.91,950.673" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.91,869.375L1492.91,858.947" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.91,832.707L1492.91,832.495" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1130.92,1686.2L1130.92,1685.97" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1228.74,1646.54L1228.74,1646.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1228.74,1646.36L1228.74,1629.72" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1228.74,1629.72L1228.74,1550.29" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M656.623,1258.18L656.623,1257.99" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M656.623,1257.99L656.623,1256.24" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M656.623,1256.24L656.623,1219.08" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1145.7,1598.23L1228.74,1550.29" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M573.59,1267.02L656.623,1219.08" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M456.851,1199.42L539.884,1151.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1028.96,1530.64L1069.88,1507.02" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1069.88,1507.02L1077.98,1502.34" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1077.98,1502.34L1080.42,1500.92" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1080.42,1500.92L1082.09,1499.96" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1082.09,1499.96L1084.61,1498.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1084.61,1498.51L1112,1482.7" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1154.95L2153.01,1096.09" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1273.13L2153.01,1214.27" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1228.74,1629.72L1321.52,1575.77" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1421.03,1518.7L1545.02,1447.12" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1688.61,1364.22L1747.25,1330.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1674.76,1372.21L1688.61,1364.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1273.23L2051.06,1154.95" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M573.59,1363.27L602.839,1346.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M602.839,1346.38L603.375,1346.07" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M684.891,1299.01L821.936,1219.88" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M821.936,1219.88L832.269,1213.92" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M832.269,1213.92L881.714,1185.37" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M881.714,1185.37L1099.5,1059.63" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1198.48,1002.49L1288.62,950.442" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1288.62,950.442L1288.77,950.355" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1288.77,950.355L1314.32,935.605" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1314.32,935.605L1410.9,879.847" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1410.9,879.847L1410.9,879.843" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1410.9,879.843L1415.39,877.252" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1415.39,877.252L1416.01,876.899" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1416.01,876.899L1426.22,871" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1426.22,871L1441.55,862.149" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1441.55,862.149L1451.77,856.25" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1451.77,856.25L1492.73,832.601" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.73,832.601L1492.91,832.495" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M675.787,1422.44L1201.79,1118.75" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1300.77,1061.61L1365.31,1024.35" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1365.31,1024.35L1365.4,1024.29" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1416.67,994.695L1492.54,950.891" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.54,950.891L1492.63,950.837" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.63,950.837L1492.91,950.673" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1195.37,1530.81L1321.52,1457.98" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1421.03,1400.52L1528.25,1338.62" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1567.66,1315.87L1605.88,1293.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1735.61,1218.9L1747.25,1212.18" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1528.25,1338.62L1567.66,1315.87" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.37,1154.95L1846.43,1154.92" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.43,1154.92L1846.56,1154.85" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.56,1154.85L1856.49,1149.11" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1856.49,1149.11L1866.21,1143.5" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1866.21,1143.5L1866.89,1143.11" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1866.89,1143.11L1871.9,1140.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1871.9,1140.22L1871.99,1140.16" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1871.99,1140.16L1877.01,1137.27" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1877.01,1137.27L1882.21,1134.26" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1882.21,1134.26L1897.44,1125.47" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1897.44,1125.47L1897.54,1125.41" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1897.54,1125.41L1907.76,1119.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1907.76,1119.51L1915.2,1115.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1915.2,1115.22L1925.99,1108.99" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1925.99,1108.99L1948.72,1095.87" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1948.72,1095.87L1949.11,1095.64" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M637.641,1208.09L812.572,1107.09" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M812.572,1107.09L893.134,1060.58" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M893.134,1060.58L942.58,1032.03" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M942.58,1032.03L997.193,1000.5" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1096.17,943.356L1390.37,773.502" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1390.37,773.502L1422.13,755.164" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1145.7,1694.48L1228.74,1646.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1637.2L1483.74,1600.68L1484.17,1600.43" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1636.02,1512.76L1747.25,1448.54" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1613.57,1525.72L1613.9,1525.53" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1613.9,1525.53L1636.02,1512.76" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1391.4L2051.06,1273.13" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1145.7,1694.54L1130.92,1685.97" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M675.787,1422.44L656.16,1411.08" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M656.16,1411.08L645.381,1404.84" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M645.381,1404.84L607.245,1382.75" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M607.245,1382.75L596.465,1376.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M596.465,1376.51L573.59,1363.27" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M573.59,1363.27L471.376,1304.08" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M471.376,1304.08L456.851,1295.67" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1041.44,1537.86L1040.86,1537.52" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1145.7,1598.23L1028.96,1530.64" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M573.59,1267.02L554.609,1256.03" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M554.609,1256.03L456.851,1199.42" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1228.74,1550.29L1112,1482.7" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M656.623,1219.08L637.641,1208.09" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M637.641,1208.09L539.884,1151.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1154.95L1948.72,1095.87" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1948.72,1095.87L1886.24,1059.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.37,1036.78L1846.21,1036.68" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1733.72,971.735L1492.91,832.707" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <g>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path d="M1898.17,1125.88L1897.44,1125.47" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1897.44,1125.47L1846.84,1096.25" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1611.58,960.422L1544.53,921.711" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1714.44,1019.81L1712.02,1018.42" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1544.53,921.711L1513.44,903.761" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1513.44,903.761L1494.01,892.547" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1494.01,892.547L1493.55,892.276" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1493.55,892.276L1468.44,877.783" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1468.44,877.783L1442.18,862.621" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1442.18,862.621L1441.58,862.273" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1416.36,876.418L1416.36,876.414" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1872.62,1140.63L1871.9,1140.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1871.9,1140.22L1846.84,1125.75" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1704.34,1043.48L1518.98,936.461" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1518.98,936.461L1494.04,922.061" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1494.04,922.061L1493.55,921.776" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1493.55,921.776L1468.47,907.297" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1468.47,907.297L1442.89,892.533" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1442.89,892.533L1416.63,877.371" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1416.63,877.371L1416.03,877.023" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1694.87,1067.71L1493.55,951.473" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1493.55,951.473L1493.26,951.309" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1493.26,951.309L1492.54,950.891" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1492.54,950.891L1468.32,936.909" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1468.32,936.909L1467.6,936.491" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1467.6,936.491L1442.75,922.146" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1442.75,922.146L1442.02,921.728" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1442.02,921.728L1417.18,907.382" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1417.18,907.382L1416.45,906.964" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1416.45,906.964L1416.02,906.716" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1416.02,877.019L1441.57,862.269" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeLinecap: "butt" }}/>
                                        <path d="M1416.02,906.716L1416.02,877.724" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeLinecap: "butt" }}/>
                                        <path d="M1416.02,877.724L1416.02,877.189" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeLinecap: "butt" }}/>
                                        <path d="M1667.82,1139.81L1417.3,995.167" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1417.3,995.167L1416.34,994.612" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1416.34,994.612L1384.46,976.207" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1384.46,976.207L1366.33,965.738" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1366.33,965.738L1355.95,959.75" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1355.95,959.75L1340.75,950.974" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1340.75,950.974L1314.95,936.078" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1314.95,936.078L1314.81,935.995" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1658.3,1163.81L1391.75,1009.92" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1391.75,1009.92L1390.79,1009.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1390.79,1009.36L1366.35,995.252" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1366.35,995.252L1340.78,980.488" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1340.78,980.488L1315.2,965.724" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1315.2,965.724L1289.4,950.828" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1289.4,950.828L1289.25,950.741" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1648.7,1187.97L1366.03,1024.77" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1366.03,1024.77L1365.31,1024.35" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1365.31,1024.35L1365.07,1024.21" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1365.07,1024.21L1340.63,1010.1" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1340.63,1010.1L1339.91,1009.68" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1339.91,1009.68L1315.06,995.337" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1315.06,995.337L1314.33,994.919" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1314.33,994.919L1289.49,980.573" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1289.49,980.573L1289.25,980.439" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1289.25,950.741L1314.8,935.991" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeLinecap: "butt" }}/>
                                        <path d="M1289.25,980.439L1289.25,950.915" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeLinecap: "butt" }}/>
                                        <path d="M1289.25,950.915L1289.25,950.911" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeLinecap: "butt" }}/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
                <path d="M1492.91,832.707L1492.73,832.601" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1492.73,832.601L1390.37,773.502" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1886.24,1059.79L1846.37,1036.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2153.01,1096.09L2016.13,1017.06" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2016.13,1017.06L1966.65,988.492" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1966.65,988.492L1917,959.83" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1917,959.83L1846.21,918.958" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1154.95L2051.06,1179.53" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1179.53L2051.06,1191.99" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1191.99L2051.06,1236.09" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1236.09L2051.06,1248.56" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2051.06,1248.56L2051.06,1273.13" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2153.01,1096.09L2153.01,1214.04" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2016.13,732.568L2016.13,1017.06" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1130.8L1420.49,1543.59" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1543.59L1420.49,1556.06" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1556.06L1420.49,1600.16" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1600.16L1420.49,1612.62" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1612.62L1420.49,1637.2" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1637.2L1420.49,1693.47" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1693.47L1420.49,1693.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M710.605,834.866L710.605,1165.1" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1130.7L1321.52,1130.89" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1130.89L1321.52,1187.95" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1187.95L1321.52,1457.98" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1457.98L1321.52,1575.77" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1575.77L1321.52,1600.73" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1600.73L1321.52,1613.19" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1613.19L1321.52,1657.3" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1657.3L1321.52,1669.76" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1669.76L1321.52,1693.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1693.51L1321.52,1694.33" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1966.65,761.166L1966.65,988.492" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1371,1159.39L1371,1159.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1371,1159.49L1371,1572.16" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1371,1572.16L1371,1584.63" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1371,1584.63L1371,1628.73" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1371,1628.73L1371,1641.19" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1371,1641.19L1371,1722.07" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M660.265,748.859L660.265,1194.16" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M615.248,722.695L615.248,1194.68" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1966.65,703.969L1917.16,732.568" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1370.84,1102.2L1321.52,1130.7" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1130.7L1321.36,1130.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M664.12,694.002L615.248,722.248" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1448.58L1796.73,1477.18" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1693.51L1371,1722.11" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1448.54L1796.73,1477.14" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1693.47L1371,1722.07" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M886.874,1182.49L881.66,1185.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M881.66,1185.51L837.391,1211.09" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M2016.13,732.568L1966.65,761.166" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1917.1,732.568L1917.08,789.691" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1917.08,789.691L1917,959.83" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1728.88,679.939L1728.88,680.924" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1728.88,680.924L1728.88,817.968" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1629.9,566.552L1629.82,760.712" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1679.4,595.15L1679.4,789.369" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1678.56,537.953L1629.92,566.065" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1711.46,576.619L1679.4,595.15" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.49,1130.7L1420.4,1130.75" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.4,1130.75L1370.84,1159.39" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M710.605,720.166L710.303,720.341" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M710.303,720.341L660.96,748.859" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M615.248,722.695L899.86,887.188" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M899.86,887.188L950.371,916.382" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M950.371,916.382L981.373,934.3" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M981.373,934.3L1046.58,971.987" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1046.58,971.987L1148.89,1031.12" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1148.89,1031.12L1171.79,1044.35" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1171.79,1044.35L1182.58,1050.59" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1182.58,1050.59L1220.75,1072.65" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1220.75,1072.65L1231.54,1078.88" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1231.54,1078.88L1251.18,1090.24" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1251.18,1090.24L1321.36,1130.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.36,1130.8L1321.52,1130.89" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1321.52,1130.89L1370.84,1159.39" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1370.84,1159.39L1371,1159.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M660.927,806.154L710.605,834.866" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M710.605,834.866L881.437,933.6" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M881.437,933.6L931.949,962.793" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M931.949,962.793L962.951,980.711" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M962.951,980.711L997.193,1000.5" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M997.193,1000.5L1099.5,1059.63" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1099.5,1059.63L1122.4,1072.87" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1122.4,1072.87L1133.19,1079.1" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1133.19,1079.1L1171.36,1101.16" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1171.36,1101.16L1182.15,1107.4" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1182.15,1107.4L1201.79,1118.75" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1201.79,1118.75L1321.52,1187.95" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1679.4,537.953L1719.84,561.324" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1719.84,561.324L1722.84,563.057" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1761.89,585.627L1774.32,592.809" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1816.38,617.118L1828.85,624.327" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1870.66,648.494L1883.37,655.838" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1925.64,680.267L1966.65,703.969" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1966.65,703.969L2016.13,732.568" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1629.92,566.552L1679.4,595.15" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1679.4,595.15L1917.16,732.568" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1917.16,732.568L1966.65,761.166" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1679.51,652.387L1728.88,680.924" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1728.88,680.924L1917.08,789.691" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1917.08,789.691L1917.16,789.743" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M664.73,694.002L710.303,720.341" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M710.303,720.341L918.357,840.588" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M918.357,840.588L968.869,869.781" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M968.869,869.781L999.871,887.699" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M999.871,887.699L1041.58,911.807" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1041.58,911.807L1090.45,940.052" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,940.052L1096.17,943.356" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1096.17,943.356L1198.48,1002.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1198.48,1002.49L1221.38,1015.72" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1221.38,1015.72L1232.17,1021.96" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1232.17,1021.96L1270.34,1044.02" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1270.34,1044.02L1281.13,1050.25" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1281.13,1050.25L1300.77,1061.61" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1300.77,1061.61L1420.4,1130.75" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1420.4,1130.75L1420.49,1130.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,885.779L1846.21,885.82" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,885.82L1846.21,918.958" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,918.958L1846.21,940.274" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,940.274L1846.21,1036.68" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1036.68L1846.21,1062.92" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1062.92L1846.21,1075.39" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1075.39L1846.21,1083.98" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1083.98L1846.21,1095.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1095.78L1846.21,1113.48" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1113.48L1846.21,1119.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1119.49L1846.21,1125.28" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1125.28L1846.21,1131.17" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1131.17L1846.21,1131.95" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1131.95L1846.21,1143.18" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1143.18L1846.21,1154.65" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1154.65L1846.21,1154.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1154.79L1846.21,1178.35" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1178.35L1846.21,1273.23" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1273.23L1846.21,1297.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1297.8L1846.21,1310.27" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1310.27L1846.21,1354.37" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1354.37L1846.21,1366.83" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1366.83L1846.21,1391.4" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,1391.4L1846.21,1448.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1139.94,592.068L1139.94,917.897" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,885.779L1747.25,943.067" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1189.6L1747.25,1204.25" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1204.25L1747.25,1212.18" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1212.18L1747.25,1216.4" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1216.4L1747.25,1263.58" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1263.58L1747.25,1330.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1330.36L1747.25,1354.94" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1354.94L1747.25,1367.4" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1367.4L1747.25,1411.5" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1411.5L1747.25,1423.97" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1423.97L1747.25,1448.54" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,1448.54L1747.25,1448.58" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,914.513L1796.73,969.157" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,969.157L1796.73,1008.11" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1008.11L1796.73,1034.35" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1034.35L1796.73,1046.82" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1046.82L1796.73,1055.41" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1055.41L1796.73,1064.93" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1064.93L1796.73,1067.21" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1067.21L1796.73,1084.91" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1084.91L1796.73,1090.92" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1090.92L1796.73,1096.71" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1096.71L1796.73,1102.6" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1102.6L1796.73,1103.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1103.38L1796.73,1114.61" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1114.61L1796.73,1126.08" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1126.08L1796.73,1126.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1126.22L1796.73,1149.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1149.78L1796.73,1173.62" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1173.62L1796.73,1197.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1197.78L1796.73,1203.12" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1203.12L1796.73,1326.37" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1326.37L1796.73,1338.84" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1338.84L1796.73,1382.93" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1382.93L1796.73,1395.4" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1395.4L1796.73,1477.14" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.73,1477.14L1796.73,1477.18" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,505.969L1090.45,506.317" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,506.317L1090.45,563.47" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,563.47L1090.45,659.491" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,659.491L1090.45,940.052" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1041.58,477.23L1041.58,477.718" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1041.58,477.718L1041.58,535.224" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1041.58,782.614L1041.58,911.807" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.57,857.221L1767.94,873.767" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1767.94,873.767L1747.39,885.644" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.39,885.644L1747.08,885.82" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1139.94,477.718L1090.76,506.141" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.76,506.141L1090.45,506.317" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,448.984L1041.58,477.23" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1846.21,885.82L1817.53,902.398" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1817.53,902.398L1796.95,914.289" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.95,914.289L1796.57,914.513" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1041.58,477.718L1090.76,506.141" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.76,506.141L1471.9,726.426" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1471.9,726.426L1747.39,885.644" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.39,885.644L1796.95,914.289" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1796.95,914.289L1797.34,914.513" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1039.99,534.301L1041.58,535.224" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1041.58,535.224L1090.45,563.47" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,563.47L1121.46,581.387" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1121.46,581.387L1139.94,592.068" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1139.94,592.068L1422.13,755.164" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1422.13,755.164L1745.5,942.057" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1747.25,943.067L1795.73,971.087" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1745.5,942.057L1747.25,943.067" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1090.45,448.984L1629.82,760.712" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1629.82,760.712L1679.4,789.369" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1679.4,789.369L1728.88,817.968" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1728.88,817.968L1846.21,885.779" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1484.17,1600.43L1534.69,1629.6" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <g>
                    <g>
                        <path d="M1584.17,1600.72L1534.69,1629.31" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1534.69,1629.31L1564.58,1554" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1564.58,1554L1577.24,1522.12" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1577.24,1522.12L1583.66,1505.95" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1583.66,1505.95L1606.36,1448.74" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1606.36,1448.74L1612.78,1432.57" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1612.78,1432.57L1625.44,1400.69" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1625.44,1400.69L1686.29,1247.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1686.29,1247.38L1692.42,1231.93" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1692.42,1231.93L1707.66,1193.54" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1707.66,1193.54L1711.58,1183.66" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1711.58,1183.66L1721.17,1159.5" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1721.17,1159.5L1722.9,1155.15" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1722.9,1155.15L1730.7,1135.5" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1730.7,1135.5L1738.4,1116.11" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1738.4,1116.11L1746.01,1096.94" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1746.01,1096.94L1746.05,1096.82" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1746.05,1096.82L1747.25,1093.82" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1747.25,1093.82L1749.76,1087.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1749.76,1087.49L1753.38,1078.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1753.38,1078.36L1753.64,1077.72" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1753.64,1077.72L1755.54,1072.93" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1755.54,1072.93L1757.41,1068.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1757.41,1068.22L1759.35,1063.33" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1759.35,1063.33L1765.06,1048.93" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1765.06,1048.93L1768.87,1039.33" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1768.87,1039.33L1771.65,1032.34" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1771.65,1032.34L1775.67,1022.2" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1775.67,1022.2L1796.73,969.157" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1584.17,1600.43L1613.9,1525.53" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1613.9,1525.53L1626.56,1493.65" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1626.56,1493.65L1632.98,1477.48" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1632.98,1477.48L1655.68,1420.27" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1655.68,1420.27L1662.1,1404.09" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1662.1,1404.09L1674.76,1372.21" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1674.76,1372.21L1723.35,1249.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1723.35,1249.79L1735.61,1218.9" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1735.61,1218.9L1738.59,1211.4" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1738.59,1211.4L1742.51,1201.52" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1742.51,1201.52L1747.25,1189.6" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1747.25,1189.6L1752.1,1177.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1752.1,1177.36L1753.83,1173.01" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1753.83,1173.01L1761.63,1153.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1761.63,1153.36L1769.33,1133.96" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1769.33,1133.96L1776.94,1114.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1776.94,1114.8L1780.69,1105.35" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1780.69,1105.35L1784.31,1096.21" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1784.31,1096.21L1784.57,1095.58" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1784.57,1095.58L1786.47,1090.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1786.47,1090.79L1788.34,1086.07" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1788.34,1086.07L1790.28,1081.19" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1790.28,1081.19L1795.99,1066.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1795.99,1066.79L1796.73,1064.93" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1484.17,1600.43L1496.82,1568.55" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1496.82,1568.55L1503.24,1552.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1503.24,1552.38L1525.95,1495.17" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1525.95,1495.17L1532.37,1479" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1532.37,1479L1545.02,1447.12" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1545.02,1447.12L1605.88,1293.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1605.88,1293.8L1641.99,1202.82" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1641.99,1202.82L1648.08,1187.5" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1648.08,1187.5L1657.23,1164.43" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1657.23,1164.43L1657.66,1163.34" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1657.66,1163.34L1661.15,1154.54" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1661.15,1154.54L1667.19,1139.34" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1667.19,1139.34L1670.75,1130.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1670.75,1130.38L1672.47,1126.04" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1672.47,1126.04L1680.27,1106.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1680.27,1106.38L1687.97,1086.99" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1687.97,1086.99L1695.52,1067.97" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1695.52,1067.97L1695.58,1067.82" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1695.58,1067.82L1695.62,1067.71" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1695.62,1067.71L1699.33,1058.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1699.33,1058.38L1702.95,1049.24" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1702.95,1049.24L1703.21,1048.6" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1703.21,1048.6L1705.11,1043.81" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1705.11,1043.81L1706.98,1039.1" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1706.98,1039.1L1708.92,1034.21" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1708.92,1034.21L1714.63,1019.81" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1714.63,1019.81L1718.44,1010.21" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1718.44,1010.21L1721.22,1003.22" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1721.22,1003.22L1725.24,993.083" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1725.24,993.083L1733.72,971.735" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1733.72,971.735L1745.5,942.057" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1745.5,942.057L1746.21,940.274" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M893.134,1060.58L931.949,962.793" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M968.869,869.781L1041.58,686.593" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1041.58,686.593L1090.45,563.47" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M942.58,1032.03L962.951,980.711" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M999.871,887.699L1041.58,782.614" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1041.58,782.614L1090.45,659.491" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M812.572,1107.09L881.437,933.6" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M918.357,840.588L1039.93,534.301" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M1616.65,992.078L1638.63,1004.77" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <g>
                            <g>
                                <path d="M1638.54,991.177L1661.33,977.441" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1638.63,1004.77L1661.41,991.03" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1617.13,951.826L1635.4,941.277" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1635.4,941.277L1637.95,939.803" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1637.95,939.803L1638.54,939.462" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1643.04,974.444C1643.51,976.555 1643.77,978.682 1643.77,980.483C1643.77,983.201 1643.13,986.504 1641.82,988.402C1640.52,990.285 1638.17,991.679 1635.89,991.873C1633.59,992.068 1630.38,990.945 1628.02,989.575C1625.39,988.056 1622.32,985.464 1620.14,982.756C1617.86,979.912 1615.63,975.923 1614.32,972.513C1613.08,969.271 1612.28,965.333 1612.27,962.297C1612.26,959.547 1612.96,956.187 1614.27,954.292C1615.55,952.437 1617.89,951.108 1620.14,950.93C1622.44,950.749 1625.65,951.85 1628.02,953.204C1629.55,954.077 1631.25,955.3 1632.84,956.703" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1632.84,956.703C1633.99,957.724 1635.09,958.841 1636.01,959.986C1638.31,962.834 1640.53,966.874 1641.82,970.29C1642.31,971.596 1642.72,973.016 1643.04,974.444" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1637.95,939.803C1638.61,939.564 1639.28,939.41 1639.94,939.357C1642.24,939.176 1645.45,940.277 1647.82,941.631C1650.47,943.141 1653.62,945.695 1655.82,948.414C1658.12,951.261 1660.33,955.301 1661.62,958.717C1662.84,961.953 1663.57,965.891 1663.57,968.91C1663.57,971.629 1662.93,974.931 1661.62,976.83" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1635.4,941.277C1636.15,940.646 1637.03,940.14 1637.95,939.803" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                        <path d="M1627.5,983.906C1625.69,982.828 1623.57,980.989 1622.07,979.068C1620.5,977.05 1618.97,974.22 1618.07,971.801C1617.21,969.502 1616.66,966.708 1616.65,964.553C1616.65,962.602 1617.12,960.219 1618.03,958.875C1618.91,957.559 1620.53,956.616 1622.07,956.49C1623.65,956.361 1625.86,957.142 1627.5,958.103C1629.32,959.173 1631.49,960.985 1633,962.914C1634.58,964.935 1636.11,967.801 1637,970.224C1637.84,972.519 1638.34,975.313 1638.34,977.455C1638.34,979.384 1637.9,981.727 1637,983.074C1636.1,984.409 1634.49,985.398 1632.92,985.536C1631.33,985.675 1629.12,984.878 1627.5,983.906Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1616.65,979.025L1616.65,992.078" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1638.63,991.712L1638.63,1004.77" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1661.41,977.976L1661.41,991.03" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M1666.71,1020.43L1688.69,1033.12" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <g>
                            <g>
                                <path d="M1688.6,1019.53L1711.38,1005.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1688.69,1033.12L1711.47,1019.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1667.19,980.177L1685.46,969.627" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1685.46,969.627L1688.01,968.153" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1688.01,968.153L1688.6,967.813" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1693.1,1002.8C1693.57,1004.9 1693.83,1007.03 1693.83,1008.83C1693.83,1011.55 1693.19,1014.85 1691.88,1016.75C1690.58,1018.63 1688.23,1020.03 1685.95,1020.22C1683.65,1020.42 1680.44,1019.3 1678.08,1017.93C1675.45,1016.41 1672.38,1013.81 1670.2,1011.11C1667.92,1008.26 1665.7,1004.27 1664.38,1000.86C1663.13,997.622 1662.34,993.684 1662.33,990.647C1662.32,987.897 1663.02,984.537 1664.33,982.643C1665.61,980.788 1667.95,979.459 1670.2,979.281C1672.5,979.099 1675.71,980.2 1678.08,981.554C1679.61,982.428 1681.31,983.651 1682.9,985.054" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1682.9,985.054C1684.05,986.075 1685.15,987.191 1686.08,988.337C1688.37,991.185 1690.59,995.224 1691.88,998.64C1692.37,999.946 1692.78,1001.37 1693.1,1002.8" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1688.01,968.153C1688.66,967.915 1689.34,967.761 1690.01,967.708C1692.3,967.527 1695.51,968.628 1697.88,969.982C1700.53,971.491 1703.68,974.045 1705.88,976.764C1708.17,979.612 1710.39,983.652 1711.68,987.068C1712.9,990.303 1713.63,994.242 1713.63,997.261C1713.63,999.979 1712.99,1003.28 1711.68,1005.18" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1685.46,969.627C1686.21,968.997 1687.09,968.49 1688.01,968.153" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                        <path d="M1677.56,1012.26C1675.75,1011.18 1673.63,1009.34 1672.13,1007.42C1670.56,1005.4 1669.03,1002.57 1668.13,1000.15C1667.27,997.852 1666.72,995.059 1666.71,992.904C1666.71,990.953 1667.18,988.569 1668.09,987.226C1668.97,985.91 1670.59,984.967 1672.13,984.84C1673.71,984.712 1675.92,985.493 1677.56,986.453C1679.38,987.524 1681.55,989.336 1683.06,991.265C1684.64,993.285 1686.16,996.151 1687.06,998.575C1687.9,1000.87 1688.4,1003.66 1688.4,1005.81C1688.4,1007.73 1687.96,1010.08 1687.06,1011.42C1686.16,1012.76 1684.55,1013.75 1682.98,1013.89C1681.39,1014.02 1679.18,1013.23 1677.56,1012.26Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1666.71,1007.38L1666.71,1020.43" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1688.69,1020.06L1688.69,1033.12" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1711.47,1006.33L1711.47,1019.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M1770.16,635.189L1792.13,647.876" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <g>
                                    <g>
                                        <path d="M1792.04,634.287L1792.51,634.004" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1792.51,634.004L1793.09,633.653" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1793.09,633.653L1814.83,620.551" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1792.13,647.876L1814.92,634.14" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1770.63,594.937L1774.32,592.809" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1774.32,592.809L1788.9,584.387" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1788.9,584.387L1791.46,582.913" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1791.46,582.913L1792.05,582.573" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1796.54,617.555C1797.01,619.665 1797.27,621.793 1797.27,623.593C1797.27,626.312 1796.63,629.614 1795.32,631.513C1794.75,632.341 1793.97,633.074 1793.09,633.653" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1793.09,633.653C1792.9,633.777 1792.71,633.895 1792.51,634.004" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1792.51,634.004C1791.53,634.543 1790.46,634.893 1789.4,634.984C1787.1,635.179 1783.89,634.056 1781.52,632.686C1778.9,631.166 1775.82,628.574 1773.65,625.866C1771.37,623.023 1769.14,619.034 1767.83,615.624C1766.58,612.382 1765.78,608.444 1765.77,605.407C1765.77,602.657 1766.46,599.297 1767.77,597.403C1769.06,595.548 1771.4,594.219 1773.65,594.041C1774.72,593.956 1775.98,594.15 1777.27,594.518" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1777.27,594.518C1778.75,594.94 1780.26,595.591 1781.52,596.314C1783,597.155 1784.63,598.32 1786.16,599.657" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1786.16,599.657L1786.34,599.814" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1786.34,599.814C1787.5,600.835 1788.59,601.951 1789.52,603.097C1791.82,605.945 1794.03,609.984 1795.32,613.4C1795.81,614.706 1796.23,616.127 1796.54,617.555" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1791.46,582.913C1792.11,582.675 1792.78,582.521 1793.45,582.468C1795.74,582.287 1798.95,583.388 1801.32,584.742C1803.97,586.251 1807.12,588.805 1809.32,591.524C1811.62,594.372 1813.83,598.412 1815.12,601.828C1816.35,605.063 1817.07,609.002 1817.07,612.02C1817.07,613.653 1816.84,615.495 1816.38,617.118" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1816.38,617.118C1816.06,618.199 1815.65,619.182 1815.12,619.94" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1788.9,584.387C1789.65,583.757 1790.53,583.25 1791.46,582.913" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                    </g>
                                </g>
                                <path d="M1781,627.016C1779.19,625.938 1777.07,624.099 1775.58,622.178C1774.01,620.161 1772.47,617.331 1771.57,614.912C1770.71,612.612 1770.16,609.818 1770.16,607.664C1770.15,605.713 1770.63,603.329 1771.53,601.986C1772.42,600.67 1774.03,599.727 1775.58,599.6C1777.15,599.472 1779.37,600.253 1781,601.213C1782.82,602.284 1784.99,604.096 1786.5,606.025C1788.09,608.045 1789.61,610.911 1790.5,613.335C1791.34,615.63 1791.84,618.424 1791.84,620.566C1791.84,622.494 1791.4,624.837 1790.5,626.184C1789.6,627.52 1787.99,628.509 1786.42,628.646C1784.84,628.785 1782.63,627.988 1781,627.016Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1770.16,622.135L1770.16,635.189" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1792.13,634.823L1792.13,647.876" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1814.92,621.087L1814.92,634.14" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M1824.35,666.903L1846.32,679.59" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <g>
                                    <g>
                                        <path d="M1846.24,666.001L1846.7,665.718" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1846.7,665.718L1847.29,665.366" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1847.29,665.366L1869.02,652.265" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1846.32,679.59L1869.11,665.854" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1824.82,626.651L1828.85,624.327" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1828.85,624.327L1843.1,616.101" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1843.1,616.101L1845.65,614.627" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1845.65,614.627L1846.24,614.286" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1850.74,649.269C1851.21,651.379 1851.47,653.507 1851.47,655.307C1851.47,658.026 1850.83,661.328 1849.51,663.227C1848.94,664.054 1848.17,664.788 1847.29,665.366" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1847.29,665.366C1847.1,665.491 1846.9,665.608 1846.7,665.718" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1846.7,665.718C1845.73,666.257 1844.65,666.607 1843.59,666.697C1841.29,666.893 1838.08,665.77 1835.72,664.4C1833.09,662.88 1830.02,660.288 1827.84,657.58C1825.56,654.736 1823.33,650.747 1822.02,647.338C1820.77,644.096 1819.98,640.158 1819.97,637.121C1819.96,634.371 1820.65,631.011 1821.97,629.117C1823.25,627.262 1825.59,625.933 1827.84,625.754C1829.36,625.634 1831.29,626.078 1833.1,626.786" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1833.1,626.786C1834.02,627.145 1834.92,627.572 1835.72,628.028C1836.67,628.571 1837.68,629.249 1838.7,630.02" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1838.7,630.02C1839.32,630.491 1839.93,630.996 1840.54,631.527" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1840.54,631.527C1841.69,632.549 1842.79,633.665 1843.71,634.811C1846.01,637.658 1848.22,641.698 1849.51,645.114C1850.01,646.42 1850.42,647.841 1850.74,649.269" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1845.65,614.627C1846.3,614.388 1846.98,614.235 1847.64,614.182C1849.93,614 1853.14,615.101 1855.52,616.456C1858.16,617.965 1861.32,620.519 1863.51,623.238C1865.81,626.086 1868.02,630.126 1869.32,633.542C1870.54,636.777 1871.27,640.716 1871.27,643.734C1871.27,645.254 1871.07,646.957 1870.66,648.494" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1870.66,648.494C1870.34,649.707 1869.89,650.817 1869.32,651.654" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1843.1,616.101C1843.85,615.471 1844.73,614.964 1845.65,614.627" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                    </g>
                                </g>
                                <path d="M1835.19,658.73C1833.38,657.652 1831.27,655.813 1829.77,653.892C1828.2,651.875 1826.67,649.045 1825.76,646.626C1824.9,644.326 1824.36,641.532 1824.35,639.378C1824.34,637.427 1824.82,635.043 1825.73,633.699C1826.61,632.383 1828.22,631.44 1829.77,631.314C1831.35,631.185 1833.56,631.967 1835.19,632.927C1837.01,633.998 1839.19,635.81 1840.7,637.739C1842.28,639.759 1843.8,642.625 1844.69,645.049C1845.54,647.344 1846.04,650.138 1846.04,652.279C1846.04,654.208 1845.6,656.551 1844.69,657.898C1843.8,659.233 1842.18,660.223 1840.61,660.36C1839.03,660.499 1836.82,659.702 1835.19,658.73Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1824.35,653.849L1824.35,666.903" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1846.32,666.536L1846.32,679.59" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1869.11,652.8L1869.11,665.854" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M1879.51,698.046L1901.48,710.734" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <g>
                                    <g>
                                        <path d="M1901.39,697.145L1901.86,696.862" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1901.86,696.862L1902.44,696.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1902.44,696.51L1924.18,683.409" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1901.48,710.734L1924.27,696.998" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1879.98,657.795L1883.37,655.838" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1883.37,655.838L1898.25,647.245" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1898.25,647.245L1900.81,645.771" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1900.81,645.771L1901.39,645.43" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1905.89,680.412C1906.36,682.523 1906.62,684.65 1906.62,686.451C1906.62,689.17 1905.98,692.472 1904.67,694.37C1904.1,695.198 1903.32,695.932 1902.44,696.51" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1902.44,696.51C1902.25,696.635 1902.06,696.752 1901.86,696.862" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1901.86,696.862C1900.88,697.4 1899.81,697.751 1898.75,697.841C1896.45,698.037 1893.24,696.913 1890.87,695.543C1888.25,694.024 1885.17,691.432 1883,688.724C1880.71,685.88 1878.49,681.891 1877.17,678.481C1875.93,675.24 1875.13,671.302 1875.12,668.265C1875.11,665.515 1875.81,662.155 1877.12,660.26C1878.41,658.405 1880.75,657.076 1883,656.898C1883.78,656.837 1884.66,656.923 1885.58,657.117" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1885.58,657.117C1887.37,657.494 1889.31,658.278 1890.87,659.172C1892.4,660.045 1894.1,661.269 1895.69,662.671" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1895.69,662.671C1895.98,662.926 1896.26,663.186 1896.54,663.451" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1896.54,663.451C1897.38,664.251 1898.17,665.094 1898.87,665.954C1901.17,668.802 1903.38,672.842 1904.67,676.258C1905.16,677.564 1905.58,678.984 1905.89,680.412" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1900.81,645.771C1901.46,645.532 1902.13,645.378 1902.8,645.326C1905.09,645.144 1908.3,646.245 1910.67,647.599C1913.32,649.109 1916.47,651.663 1918.67,654.382C1920.97,657.23 1923.18,661.269 1924.47,664.685C1925.69,667.921 1926.42,671.859 1926.42,674.878C1926.42,676.609 1926.16,678.576 1925.64,680.267" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1925.64,680.267C1925.34,681.232 1924.95,682.108 1924.47,682.798" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1898.25,647.245C1899,646.615 1899.88,646.108 1900.81,645.771" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                    </g>
                                </g>
                                <path d="M1890.35,689.874C1888.54,688.796 1886.42,686.957 1884.93,685.036C1883.36,683.018 1881.82,680.189 1880.92,677.77C1880.06,675.47 1879.51,672.676 1879.51,670.522C1879.5,668.571 1879.98,666.187 1880.88,664.843C1881.77,663.527 1883.38,662.584 1884.93,662.458C1886.5,662.329 1888.71,663.11 1890.35,664.071C1892.17,665.142 1894.34,666.954 1895.85,668.883C1897.44,670.903 1898.96,673.769 1899.85,676.192C1900.69,678.488 1901.19,681.282 1901.19,683.423C1901.19,685.352 1900.75,687.695 1899.85,689.042C1898.95,690.377 1897.34,691.366 1895.77,691.504C1894.19,691.643 1891.98,690.846 1890.35,689.874Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1879.51,684.993L1879.51,698.046" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1901.48,697.68L1901.48,710.734" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1924.27,683.944L1924.27,696.998" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M1715.66,603.712L1737.64,616.399" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <g>
                                    <g>
                                        <path d="M1737.55,602.81L1738.02,602.527" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1738.02,602.527L1738.6,602.176" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1738.6,602.176L1760.34,589.074" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1737.64,616.399L1760.43,602.663" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1716.14,563.46L1719.84,561.324" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1719.84,561.324L1734.41,552.91" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1734.41,552.91L1736.97,551.436" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1736.97,551.436L1737.55,551.096" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1742.05,586.078C1742.52,588.188 1742.78,590.316 1742.78,592.116C1742.78,594.835 1742.14,598.137 1740.83,600.036C1740.26,600.864 1739.48,601.597 1738.6,602.176" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1738.6,602.176C1738.41,602.3 1738.22,602.418 1738.02,602.527" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1738.02,602.527C1737.04,603.066 1735.97,603.416 1734.91,603.507C1732.61,603.702 1729.4,602.579 1727.03,601.209C1724.41,599.689 1721.33,597.097 1719.16,594.389C1716.87,591.546 1714.65,587.557 1713.34,584.147C1712.43,581.8 1711.77,579.089 1711.46,576.619" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1711.46,576.619C1711.35,575.677 1711.29,574.769 1711.28,573.93C1711.27,571.18 1711.97,567.82 1713.28,565.926C1714.57,564.071 1716.91,562.742 1719.16,562.564C1720.24,562.478 1721.53,562.679 1722.84,563.057" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1722.84,563.057C1724.3,563.48 1725.78,564.123 1727.03,564.837C1728.49,565.668 1730.1,566.815 1731.62,568.131" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1731.62,568.131L1731.85,568.337" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1731.85,568.337C1733.01,569.358 1734.1,570.474 1735.03,571.62C1737.33,574.468 1739.54,578.507 1740.83,581.923C1741.32,583.229 1741.74,584.65 1742.05,586.078" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1736.97,551.436C1737.62,551.198 1738.29,551.044 1738.96,550.991C1741.25,550.81 1744.46,551.911 1746.83,553.265C1749.48,554.774 1752.63,557.328 1754.83,560.047C1757.13,562.895 1759.34,566.935 1760.63,570.351C1761.86,573.586 1762.58,577.525 1762.58,580.543C1762.58,582.171 1762.35,584.008 1761.89,585.627" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1761.89,585.627C1761.58,586.713 1761.16,587.701 1760.63,588.463" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                        <path d="M1734.41,552.91C1735.16,552.28 1736.04,551.773 1736.97,551.436" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                    </g>
                                </g>
                                <path d="M1724.82,568.9C1725.41,569.145 1725.99,569.432 1726.51,569.736C1728.33,570.807 1730.5,572.619 1732.01,574.548C1733.6,576.568 1735.12,579.434 1736.01,581.858C1736.85,584.153 1737.35,586.947 1737.35,589.089C1737.35,591.017 1736.91,593.36 1736.01,594.707C1735.11,596.043 1733.5,597.032 1731.93,597.169C1730.35,597.308 1728.14,596.511 1726.51,595.539C1724.7,594.461 1722.58,592.622 1721.09,590.701C1719.52,588.684 1717.98,585.854 1717.08,583.435C1716.22,581.135 1715.67,578.341 1715.66,576.187C1715.66,575.522 1715.72,574.806 1715.83,574.098" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1715.83,574.098C1716.04,572.731 1716.45,571.394 1717.04,570.508C1717.93,569.193 1719.54,568.25 1721.09,568.123C1722.16,568.035 1723.54,568.372 1724.82,568.9" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1715.66,590.658L1715.66,603.712" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1737.64,603.345L1737.64,616.399" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1760.43,589.609L1760.43,602.663" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M1294.81,1006.19L1294.81,1035.72" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1383.83,954.796L1383.83,975.734" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1269.24,991.429L1269.24,1020.96" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1294.81,1035.72L1339.91,1009.68" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1339.91,1009.68L1340,1009.63" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1294.81,1006.19L1314.33,994.919" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1314.33,994.919L1314.43,994.864" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1365.69,965.265L1383.83,954.796" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1269.24,991.429L1288.86,980.101" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1340.12,950.502L1358.26,940.033" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1269.24,1020.96L1294.81,1035.72" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1269.24,991.429L1294.81,1006.19" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1358.26,940.033L1383.83,954.796" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M1423.79,932.256L1423.79,961.784" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1512.81,880.86L1512.81,903.289" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1398.22,917.492L1398.22,947.02" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1423.79,961.784L1467.6,936.491" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1467.6,936.491L1467.69,936.437" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1423.79,932.256L1442.02,921.728" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1442.02,921.728L1442.12,921.673" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1493.38,892.074L1512.81,880.86" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1398.22,917.492L1416.45,906.964" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1416.45,906.964L1416.55,906.909" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1467.81,877.311L1487.24,866.096" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1398.22,947.02L1423.79,961.784" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1398.22,917.492L1423.79,932.256" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1487.24,866.096L1492.91,869.375" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                        <path d="M1492.91,869.375L1512.81,880.86" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M624.493,1359.43L623.406,1358.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M623.406,1358.78L622.055,1357.96" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M622.055,1357.96L602.839,1346.38" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M602.839,1346.38L586.106,1336.29" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M586.106,1336.29L585.948,1336.2C585.948,1336.2 586.241,1336.52 586.106,1336.29" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M586.106,1336.29C585.975,1336.07 585.439,1335.32 583.837,1333.24C580.58,1329 579.317,1321.19 579.317,1314.89C579.317,1307.9 581.002,1298.78 583.837,1291.28C586.831,1283.37 591.951,1274.01 597.278,1267.41C602.364,1261.12 609.672,1255.2 615.799,1251.7C621.295,1248.57 628.731,1246.02 634.039,1246.44C635.583,1246.56 637.145,1246.91 638.657,1247.47" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M602.839,1345.58C602.839,1345.58 603.979,1346.85 600.729,1342.62C597.471,1338.38 596.209,1330.57 596.209,1324.28C596.209,1317.28 597.894,1308.16 600.729,1300.67C603.722,1292.75 608.843,1283.4 614.17,1276.8C619.256,1270.5 626.563,1264.59 632.69,1261.09C638.187,1257.95 645.622,1255.4 650.931,1255.82C651.873,1255.9 652.823,1256.06 653.764,1256.3" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M653.764,1256.3C654.364,1256.45 654.96,1256.64 655.548,1256.85" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M674.09,1268.28L656.623,1257.99" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M656.623,1257.99L653.764,1256.3" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M653.764,1256.3L638.657,1247.39" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M614.061,1320.67C612.976,1325.56 612.377,1330.49 612.377,1334.66C612.377,1340.96 613.857,1348.61 616.897,1353.01C618.223,1354.92 620.014,1356.62 622.055,1357.96" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M622.055,1357.96C622.495,1358.25 622.946,1358.52 623.406,1358.78" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M623.406,1358.78C625.669,1360.03 628.159,1360.84 630.617,1361.05C635.944,1361.5 643.377,1358.9 648.858,1355.72C654.938,1352.2 662.064,1346.2 667.099,1339.93C672.386,1333.34 677.543,1324.1 680.583,1316.2C682.646,1310.84 684.176,1304.66 684.891,1299.01" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M684.891,1299.01C685.178,1296.74 685.333,1294.55 685.339,1292.54C685.358,1286.17 683.749,1278.38 680.709,1274C677.732,1269.7 672.309,1266.62 667.099,1266.21C661.79,1265.79 654.355,1268.34 648.858,1271.47C645.313,1273.5 641.372,1276.33 637.696,1279.58" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M637.696,1279.58C635.018,1281.94 632.481,1284.53 630.338,1287.18C625.011,1293.78 619.89,1303.14 616.897,1311.05C615.752,1314.08 614.795,1317.37 614.061,1320.67" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                    </g>
                </g>
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M1028.96,1590.76L1014.56,1582.08" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1014.56,1582.08L1006.86,1577.44" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1006.86,1577.44L1006.7,1577.34C1006.7,1577.34 1007,1577.67 1006.86,1577.44" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1006.86,1577.44C1006.73,1577.21 1006.19,1576.46 1004.59,1574.38C1001.33,1570.14 1000.07,1562.33 1000.07,1556.03C1000.07,1549.04 1001.76,1539.92 1004.59,1532.42C1007.59,1524.51 1012.71,1515.15 1018.03,1508.56C1023.12,1502.26 1030.42,1496.34 1036.55,1492.85C1042.05,1489.71 1049.49,1487.16 1054.79,1487.58C1056.34,1487.7 1057.9,1488.06 1059.41,1488.61" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1023.59,1586.73C1023.59,1586.73 1024.73,1587.99 1021.48,1583.77C1018.22,1579.53 1016.96,1571.72 1016.96,1565.42C1016.96,1558.43 1018.65,1549.3 1021.48,1541.81C1022.79,1538.36 1024.5,1534.63 1026.46,1530.98" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1026.46,1530.98C1028.98,1526.26 1031.92,1521.66 1034.92,1517.94C1040.01,1511.64 1047.32,1505.73 1053.44,1502.23C1058.94,1499.1 1066.38,1496.55 1071.68,1496.96C1072.63,1497.04 1073.58,1497.2 1074.52,1497.44" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeLinecap: "butt" }}/>
                                <path d="M1074.52,1497.44C1075.12,1497.6 1075.71,1497.78 1076.3,1498" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1080.42,1500.92L1074.52,1497.44" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1074.52,1497.44L1067.69,1493.42" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                                <path d="M1067.69,1493.42L1059.41,1488.53" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                            </g>
                        </g>
                    </g>
                </g>
                <path d="M1187.22,1637.94C1189.35,1636.71 1191.85,1634.61 1193.61,1632.41C1195.47,1630.1 1197.27,1626.86 1198.34,1624.09C1199.35,1621.46 1200,1618.26 1200.01,1615.8C1200.01,1613.57 1199.45,1610.84 1198.38,1609.3C1197.34,1607.8 1195.44,1606.72 1193.61,1606.57C1191.75,1606.42 1189.15,1607.32 1187.22,1608.42C1185.07,1609.64 1182.51,1611.72 1180.73,1613.92C1178.86,1616.24 1177.07,1619.52 1176.02,1622.29C1175.02,1624.91 1174.43,1628.11 1174.43,1630.56C1174.43,1632.77 1174.95,1635.45 1176.02,1636.99C1177.08,1638.52 1178.98,1639.65 1180.83,1639.81C1182.69,1639.97 1185.3,1639.06 1187.22,1637.94Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1821.28,1416.22C1822.67,1415.42 1824.29,1414.05 1825.43,1412.62C1826.64,1411.12 1827.81,1409.02 1828.5,1407.22C1829.16,1405.51 1829.58,1403.44 1829.58,1401.84C1829.59,1400.39 1829.22,1398.62 1828.53,1397.62C1827.85,1396.64 1826.62,1395.94 1825.43,1395.85C1824.23,1395.75 1822.53,1396.33 1821.28,1397.05C1819.89,1397.84 1818.23,1399.19 1817.07,1400.62C1815.86,1402.12 1814.69,1404.25 1814.01,1406.05C1813.36,1407.76 1812.98,1409.83 1812.98,1411.42C1812.98,1412.86 1813.32,1414.6 1814.01,1415.6C1814.7,1416.59 1815.93,1417.33 1817.13,1417.43C1818.34,1417.53 1820.04,1416.94 1821.28,1416.22Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1582.41,1569.12C1583.79,1568.32 1585.41,1566.95 1586.56,1565.53C1587.76,1564.03 1588.94,1561.92 1589.63,1560.13C1590.29,1558.42 1590.71,1556.34 1590.71,1554.74C1590.72,1553.29 1590.35,1551.52 1589.66,1550.52C1588.98,1549.54 1587.75,1548.84 1586.56,1548.75C1585.35,1548.65 1583.66,1549.23 1582.41,1549.95C1581.02,1550.74 1579.35,1552.09 1578.19,1553.52C1576.98,1555.02 1575.82,1557.15 1575.14,1558.95C1574.49,1560.66 1574.11,1562.74 1574.11,1564.33C1574.11,1565.76 1574.44,1567.5 1575.14,1568.5C1575.82,1569.49 1577.06,1570.23 1578.26,1570.33C1579.47,1570.43 1581.16,1569.84 1582.41,1569.12Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1607.07,1505.16C1608.45,1504.36 1610.07,1502.99 1611.22,1501.57C1612.42,1500.07 1613.6,1497.96 1614.29,1496.17C1614.95,1494.46 1615.37,1492.38 1615.37,1490.78C1615.38,1489.33 1615.01,1487.56 1614.32,1486.56C1613.64,1485.58 1612.4,1484.88 1611.22,1484.79C1610.01,1484.69 1608.32,1485.27 1607.07,1485.99C1605.67,1486.78 1604.01,1488.13 1602.85,1489.56C1601.64,1491.06 1600.48,1493.19 1599.8,1494.99C1599.15,1496.7 1598.77,1498.78 1598.77,1500.37C1598.77,1501.8 1599.1,1503.54 1599.8,1504.54C1600.48,1505.53 1601.72,1506.27 1602.92,1506.37C1604.13,1506.47 1605.82,1505.88 1607.07,1505.16Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1821.28,1356.35C1822.67,1355.55 1824.29,1354.18 1825.43,1352.75C1826.64,1351.25 1827.81,1349.15 1828.5,1347.35C1829.16,1345.64 1829.58,1343.57 1829.58,1341.97C1829.59,1340.52 1829.22,1338.75 1828.53,1337.75C1827.85,1336.77 1826.62,1336.07 1825.43,1335.98C1824.23,1335.88 1822.53,1336.46 1821.28,1337.18C1819.89,1337.97 1818.23,1339.32 1817.07,1340.75C1815.86,1342.25 1814.69,1344.38 1814.01,1346.18C1813.36,1347.89 1812.98,1349.96 1812.98,1351.56C1812.98,1352.99 1813.32,1354.73 1814.01,1355.73C1814.7,1356.72 1815.93,1357.46 1817.13,1357.56C1818.34,1357.66 1820.04,1357.07 1821.28,1356.35Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1397.61,1663.91C1398.99,1663.11 1400.61,1661.75 1401.76,1660.32C1402.96,1658.82 1404.14,1656.72 1404.83,1654.92C1405.49,1653.21 1405.91,1651.13 1405.91,1649.53C1405.91,1648.08 1405.55,1646.31 1404.86,1645.31C1404.18,1644.34 1402.94,1643.63 1401.76,1643.54C1400.55,1643.45 1398.86,1644.03 1397.61,1644.74C1396.21,1645.54 1394.55,1646.88 1393.39,1648.32C1392.18,1649.82 1391.02,1651.94 1390.34,1653.75C1389.69,1655.45 1389.31,1657.53 1389.31,1659.12C1389.31,1660.55 1389.64,1662.29 1390.34,1663.29C1391.02,1664.29 1392.26,1665.02 1393.46,1665.12C1394.67,1665.23 1396.36,1664.63 1397.61,1663.91Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1397.61,1604.04C1398.99,1603.24 1400.61,1601.88 1401.76,1600.45C1402.96,1598.95 1404.14,1596.85 1404.83,1595.05C1405.49,1593.34 1405.91,1591.27 1405.91,1589.66C1405.91,1588.21 1405.55,1586.44 1404.86,1585.44C1404.18,1584.47 1402.94,1583.77 1401.76,1583.67C1400.55,1583.58 1398.86,1584.16 1397.61,1584.87C1396.21,1585.67 1394.55,1587.01 1393.39,1588.45C1392.18,1589.95 1391.02,1592.08 1390.34,1593.88C1389.69,1595.58 1389.31,1597.66 1389.31,1599.25C1389.31,1600.68 1389.64,1602.42 1390.34,1603.42C1391.02,1604.42 1392.26,1605.15 1393.46,1605.25C1394.67,1605.36 1396.36,1604.77 1397.61,1604.04Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1397.61,1183.8C1398.99,1183 1400.61,1181.63 1401.76,1180.2C1402.96,1178.7 1404.14,1176.6 1404.83,1174.8C1405.49,1173.1 1405.91,1171.02 1405.91,1169.42C1405.91,1167.97 1405.55,1166.2 1404.86,1165.2C1404.18,1164.22 1402.94,1163.52 1401.76,1163.43C1400.55,1163.33 1398.86,1163.91 1397.61,1164.63C1396.21,1165.42 1394.55,1166.77 1393.39,1168.2C1392.18,1169.7 1391.02,1171.83 1390.34,1173.63C1389.69,1175.34 1389.31,1177.41 1389.31,1179.01C1389.31,1180.44 1389.64,1182.18 1390.34,1183.18C1391.02,1184.17 1392.26,1184.91 1393.46,1185.01C1394.67,1185.11 1396.36,1184.52 1397.61,1183.8Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
                <path d="M1823.42,939.051C1824.8,938.25 1826.42,936.884 1827.57,935.456C1828.77,933.957 1829.94,931.855 1830.64,930.057C1831.29,928.348 1831.71,926.273 1831.72,924.672C1831.72,923.222 1831.36,921.451 1830.66,920.453C1829.99,919.475 1828.75,918.774 1827.57,918.68C1826.36,918.585 1824.67,919.165 1823.42,919.879C1822.02,920.675 1820.36,922.021 1819.2,923.454C1817.99,924.955 1816.82,927.085 1816.14,928.885C1815.5,930.591 1815.12,932.667 1815.12,934.258C1815.12,935.691 1815.45,937.432 1816.14,938.433C1816.83,939.425 1818.06,940.16 1819.27,940.262C1820.48,940.365 1822.17,939.773 1823.42,939.051Z" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px" }}/>
            </g>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2669.36,3323.27L2594.28,3526.36" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2559.52,3620.75L2541.62,3669.25" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g id="Artboard12"  transform="matrix(3.19766,2.05682,-2.90529,2.2638,10193.5,-767.341)">
            <g>
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M677.747,152.187C677.237,152.169 676.726,152.152 676.214,152.137C510.551,147.271 276.793,303.356 234.085,383.322C219.727,410.206 202.837,501.851 202.837,501.851L180.668,631.719C347.871,539.978 512.934,494.206 675.872,494.119" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "butt" }}/>
                                <path d="M675.872,494.119L677.744,494.119" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "butt" }}/>
                                <path d="M216.165,612.917C216.165,612.917 234.31,493.711 261,411.566C277.919,359.491 493.103,190.572 677.553,187.692C862.002,190.572 1077.58,359.491 1094.5,411.566C1121.18,493.711 1139.33,612.917 1139.33,612.917" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "butt" }}/>
                                <g>
                                    <g>
                                        <path d="M558.869,209.026L577.465,499.7" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "butt", strokedasharray: "3.95,0.05,0,3.95", strokedashoffset: "0.99" }}/>
                                        <path d="M332.058,333.804L377.34,544.661" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "butt", strokedasharray: "3.95,0.05,0,3.95", strokedashoffset: "0.99" }}/>
                                        <path d="M261,411.566L295.331,574.327" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "butt", strokedasharray: "3.95,0.05,0,3.95", strokedashoffset: "0.99" }}/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <path d="M440.623,261.1L478.852,516.276" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeLinecap: "butt", strokedasharray: "3.95,0.05,0,3.95", strokedashoffset: "0.99" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M677.747,152.187C677.237,152.169 676.726,152.152 676.214,152.137C510.551,147.271 276.793,303.356 234.085,383.322C219.727,410.206 202.837,501.851 202.837,501.851L180.668,631.719C347.871,539.978 512.934,494.206 675.872,494.119" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px" }}/>
                                <path d="M675.872,494.119L677.744,494.119" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px" }}/>
                                <path d="M216.165,612.917C216.165,612.917 234.31,493.711 261,411.566C277.919,359.491 493.103,190.572 677.553,187.692C862.002,190.572 1077.58,359.491 1094.5,411.566C1121.18,493.711 1139.33,612.917 1139.33,612.917" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px" }}/>
                            </g>
                        </g>
                        <path d="M619.586,1628.9L180.668,631.719" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px" }}/>
                    </g>
                </g>
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M677.747,152.187C843.498,146.306 1078.57,303.109 1121.41,383.322C1135.77,410.206 1152.66,501.851 1152.66,501.851L1174.83,631.719C1007.62,539.978 842.56,494.206 679.622,494.119" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px" }}/>
                                <path d="M677.747,187.692L679.622,494.119L677.751,494.119" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "butt", strokedasharray: "3.95,0.05,0,3.95" }}/>
                                <g>
                                    <g>
                                        <path d="M796.625,209.026L778.029,499.7" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "square", strokedasharray: "3.95,0.05,0,3.95" }}/>
                                        <path d="M1023.44,333.804L978.154,544.661" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "square", strokedasharray: "3.95,0.05,0,3.95" }}/>
                                        <path d="M1094.5,411.566L1060.16,574.327" style={{ fill: "none", stroke: "rgb(0,7,28)", strokeWidth: "0.99px", strokeLinecap: "square", strokedasharray: "3.95,0.05,0,3.95" }}/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <path d="M914.872,261.1L876.642,516.276" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeLinecap: "butt", strokedasharray: "3.95,0.05,0,3.95" }}/>
                        <path d="M695.178,1613.52L1174.83,631.719" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px" }}/>
                    </g>
                </g>
                <g transform="matrix(1,0,0,1,0,0.885651)">
                    <g transform="matrix(0.998454,0.00393694,0.00393694,0.989972,-35.4347,1.46641)">
                        <path d="M475.482,332.918L422.273,491.139" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M330.19,470.466L399.851,642.217L680,1622.84" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M453.529,272.85L475.482,332.918L512.374,241.065" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M355.343,342.516L389.558,387.803L413.626,298.319" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M389.558,387.803L422.978,489.343L399.851,642.217" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M287.51,438.438L330.19,470.466L324.414,371.305" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                </g>
                <g transform="matrix(-1,0,0,1,1355,0.885651)">
                    <g transform="matrix(0.998454,0.00393694,0.00393694,0.989972,-35.4347,1.46641)">
                        <path d="M475.482,332.918L422.273,491.139" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M330.19,470.466L399.851,642.217L719.597,1617.87" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M453.529,272.85L475.482,332.918L512.374,241.065" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M355.343,342.516L389.558,387.803L413.626,298.319" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M389.558,387.803L422.978,489.343L399.851,642.217" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-34.859,0)">
                        <path d="M287.51,438.438L330.19,470.466L324.414,371.305" style={{ fill: "none", stroke: "black", strokeWidth: "0.99px", strokeMiterlimit: "1.5" }}/>
                    </g>
                </g>
            </g>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2565.69,3264.53L2520.12,3483.49" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2498.76,3586.11L2488.22,3636.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2618.39,3293.94L2541.95,3496.11" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2506.29,3590.45L2488.61,3637.2" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2729.5,3358.04L2619.07,3540.68" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2567.77,3625.52L2541.47,3669.03" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2467.09,3653.16L2137.93,3752.92" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2006.86,3792.64L1455.43,3959.77" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2516.59,3680.94L2254.66,3893.79" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
        <g transform="matrix(1.70803,0,0,1.20921,3022.78,266.165)">
            <path d="M2155.67,3974.22L1875.11,4202.21" style={{ fill: "none", stroke: "black", strokeWidth: "2.5px", strokeMiterlimit: "1.5" }}/>
        </g>
    </g>
</svg>
     
    </div>
  );
};

export default ScrollDrawSVG;
