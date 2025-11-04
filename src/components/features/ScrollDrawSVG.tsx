import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import FullSystem from "./FullSystem";

gsap.registerPlugin(ScrollTrigger);

interface ScrollDrawSVGProps {
  isContentLoaded?: boolean;
}

const ScrollDrawSVG: React.FC<ScrollDrawSVGProps> = ({ isContentLoaded = true }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!svgRef.current || !isContentLoaded) return;

    const initScrollTriggers = () => {
      // Clean up existing ScrollTriggers
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];

      if (!svgRef.current) return;
      const paths = svgRef.current.querySelectorAll("path");

      if (paths.length === 0) {
        // Retry after a short delay if paths aren't ready
        setTimeout(() => {
          if (svgRef.current) {
            initScrollTriggers();
          }
        }, 200);
        return;
      }

      paths.forEach((path) => {
        const length = path.getTotalLength();
        if (length === 0) return; // Skip paths with no length

        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        
        const scrollTrigger = gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });

        if (scrollTrigger.scrollTrigger) {
          scrollTriggersRef.current.push(scrollTrigger.scrollTrigger);
        }
      });

      // Refresh ScrollTrigger after all animations are created
      ScrollTrigger.refresh();
      setIsReady(true);
    };

    // Initialize after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initScrollTriggers();
    }, 200);

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [svgRef, isContentLoaded]);

  // Refresh when content loads
  useEffect(() => {
    if (isContentLoaded && isReady) {
      // Delay refresh to ensure all content is rendered
      const timeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [isContentLoaded, isReady]);
  

  return (
    <div className="flex justify-center py-40" style={{ position: 'relative', zIndex: 0 }}>
         <svg ref={svgRef} width="1736" height="1708" viewBox="0 0 1736 1708" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 0 }}>
<g clip-path="url(#clip0_4070_18)">
<path d="M299.268 1690.03L56.7297 1548.34V1539.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.7297 1539.21V1534.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.7297 1534.59V1518.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.7297 1518.22V1513.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.7297 1513.59V1504.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1679.05V1676.28" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1676.28V1659.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1659.91V1655.29" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1654.76V1646.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1655.29V1654.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1690.03V1680.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1680.91V1679.05" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.666 1668.1V1659.06" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.666 1659.06V1654.44" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.666 1654.44V1638.07" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.666 1638.07V1633.44" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.666 1633.44V1624.32" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1646.17L307.077 1641.61" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M307.077 1641.61L325.042 1631.11" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M325.042 1631.11L329.003 1628.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M329.003 1628.8L336.666 1624.32" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57.1541 1504.47L64.7414 1500.03" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M64.7413 1500.03L68.7012 1497.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M68.7012 1497.72L82.7091 1489.54" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.7092 1489.54L86.6687 1487.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.6687 1487.22L94.7538 1482.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1690.03L406.575 1627.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1646.17L56.7297 1504.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.666 1624.24L169.729 1526.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M342.087 1627.39V1591.67" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.244 1504.47V1468.75" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M89.4261 1479.38V1443.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1602.31V1590.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1590.47V1590.33" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1590.33V1590.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1590.19V1588.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1588.9V1588.11" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1588.11V1584.45" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1584.45V1566.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.439 1351.46V1351.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.439 1317.29V1307.55" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.439 1351.39V1351.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.439 1321.16V1317.29" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.439 1307.55V1307.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.666 1624.32V1624.24" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M372.545 1609.6V1609.53" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M372.545 1609.53V1603.36" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M372.545 1603.36V1573.88" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162.7 1465.47V1465.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162.7 1465.39V1464.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162.7 1464.74V1450.95" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M342.087 1591.67L372.545 1573.88" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.244 1468.75L162.7 1450.95" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M89.4261 1443.66L119.882 1425.87" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1566.59L314.277 1557.82" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M314.277 1557.82L317.248 1556.08" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M317.248 1556.08L318.143 1555.56" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M318.143 1555.56L318.755 1555.2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M318.755 1555.2L319.68 1554.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M319.68 1554.66L329.726 1548.79" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1427.15L711.554 1405.31" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1471.01L711.554 1449.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M372.545 1603.36L406.575 1583.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M443.074 1562.15L488.552 1535.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M541.219 1504.82L562.727 1492.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M536.139 1507.79L541.219 1504.82" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1471.05L674.161 1427.15" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.244 1504.47L142.973 1498.2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.973 1498.2L143.169 1498.08" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M173.068 1480.62L223.334 1451.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223.334 1451.25L227.124 1449.04" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M227.124 1449.04L245.26 1438.44" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M245.26 1438.44L325.141 1391.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M361.446 1370.57L394.508 1351.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M394.508 1351.25L394.563 1351.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M394.563 1351.22L403.934 1345.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M403.934 1345.74L439.358 1325.05" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M439.359 1325.05V1325.05" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M439.359 1325.05L441.005 1324.09" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.005 1324.09L441.233 1323.95" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.233 1323.95L444.978 1321.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M444.978 1321.77L450.601 1318.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M450.601 1318.48L454.349 1316.29" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M454.349 1316.29L469.373 1307.51" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.373 1307.51L469.439 1307.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M169.729 1526.43L362.66 1413.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M398.964 1392.51L422.637 1378.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M422.637 1378.68L422.671 1378.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.475 1367.67L469.303 1351.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.303 1351.42L469.337 1351.4" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.336 1351.4L469.439 1351.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M360.305 1566.65L406.575 1539.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M443.074 1518.29L482.401 1495.32" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M496.856 1486.88L510.875 1478.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M558.458 1450.89L562.727 1448.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M482.401 1495.32L496.856 1486.88" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.083 1427.15L599.106 1427.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.105 1427.14L599.153 1427.11" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.153 1427.11L602.795 1424.98" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M602.795 1424.98L606.36 1422.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M606.36 1422.9L606.609 1422.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M606.609 1422.76L608.447 1421.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M608.447 1421.69L608.481 1421.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M608.48 1421.66L610.321 1420.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M610.321 1420.59L612.229 1419.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M612.229 1419.47L617.815 1416.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M617.815 1416.21L617.851 1416.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M617.851 1416.19L621.6 1414" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M621.6 1414L624.329 1412.41" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M624.329 1412.41L628.286 1410.09" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M628.287 1410.09L636.624 1405.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M636.624 1405.22L636.767 1405.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M155.737 1446.87L219.9 1409.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M219.9 1409.39L249.449 1392.13" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M249.449 1392.13L267.585 1381.53" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M267.585 1381.53L287.616 1369.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.92 1348.62L431.828 1285.58" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M431.828 1285.58L443.478 1278.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M342.087 1627.39L372.545 1609.53" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1606.14L466.075 1592.58L466.233 1592.49" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M521.929 1559.95L562.727 1536.12" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M513.695 1564.76L513.816 1564.69" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M513.816 1564.69L521.929 1559.95" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1514.91L674.161 1471.01" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M342.087 1627.42L336.666 1624.24" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M169.729 1526.43L162.53 1522.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162.53 1522.21L158.576 1519.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M158.576 1519.9L144.589 1511.7" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M144.589 1511.7L140.635 1509.38" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M140.635 1509.38L132.244 1504.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.244 1504.47L94.7537 1482.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M94.7537 1482.5L89.4261 1479.38" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.846 1569.27L303.633 1569.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M342.087 1591.67L299.268 1566.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.244 1468.75L125.282 1464.67" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125.282 1464.67L89.4261 1443.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M372.545 1573.88L329.726 1548.79" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162.7 1450.95L155.737 1446.87" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M155.737 1446.87L119.881 1425.87" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1427.15L636.624 1405.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M636.623 1405.22L613.707 1391.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.084 1383.29L599.024 1383.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M557.764 1359.15L469.439 1307.55" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M618.082 1416.36L617.815 1416.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M617.815 1416.21L599.255 1405.37" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M512.965 1354.95L488.372 1340.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M550.693 1377L549.805 1376.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M488.372 1340.59L476.969 1333.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M476.969 1333.92L469.842 1329.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.842 1329.76L469.673 1329.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.673 1329.66L460.463 1324.28" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M460.463 1324.28L450.831 1318.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M450.832 1318.66L450.611 1318.53" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.361 1323.78V1323.78" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M608.711 1421.84L608.447 1421.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M608.447 1421.68L599.255 1416.31" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M546.988 1385.78L479.001 1346.06" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M479.001 1346.06L469.853 1340.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.853 1340.72L469.673 1340.61" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.673 1340.61L460.474 1335.24" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M460.474 1335.24L451.092 1329.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M451.092 1329.76L441.46 1324.13" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.46 1324.13L441.24 1324" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M543.515 1394.77L469.673 1351.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.673 1351.63L469.567 1351.57" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.567 1351.57L469.303 1351.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.303 1351.42L460.419 1346.23" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M460.419 1346.23L460.155 1346.07" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M460.155 1346.07L451.041 1340.75" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M451.041 1340.75L450.773 1340.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M450.773 1340.59L441.662 1335.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.662 1335.27L441.394 1335.11" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.394 1335.11L441.236 1335.02" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.236 1324L450.608 1318.53" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M441.236 1335.02V1324.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M441.236 1324.26V1324.06" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M533.593 1421.53L441.706 1367.85" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.706 1367.85L441.354 1367.64" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.354 1367.64L429.661 1360.81" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M429.661 1360.81L423.011 1356.93" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M423.011 1356.93L419.203 1354.7" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M419.204 1354.7L413.628 1351.45" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M413.628 1351.45L404.165 1345.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M404.165 1345.92L404.114 1345.89" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M530.101 1430.44L432.334 1373.32" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M432.334 1373.32L431.982 1373.12" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M431.982 1373.12L423.018 1367.88" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M423.018 1367.88L413.639 1362.4" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M413.639 1362.4L404.257 1356.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M404.257 1356.92L394.794 1351.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M394.794 1351.39L394.739 1351.36" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M526.58 1439.41L422.901 1378.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M422.901 1378.84L422.637 1378.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M422.638 1378.68L422.549 1378.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M422.549 1378.63L413.584 1373.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M413.584 1373.39L413.32 1373.24" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M413.32 1373.24L404.206 1367.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M404.206 1367.91L403.938 1367.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M403.938 1367.76L394.827 1362.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M394.828 1362.43L394.739 1362.38" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M394.739 1351.36L404.11 1345.89" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M394.739 1362.38V1351.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M394.739 1351.43V1351.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M469.439 1307.55L469.373 1307.51" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.373 1307.51L431.828 1285.58" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M613.707 1391.83L599.083 1383.29" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M711.554 1405.31L661.349 1375.97" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M661.349 1375.97L643.2 1365.37" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M643.2 1365.37L624.989 1354.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M624.989 1354.73L599.024 1339.56" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1427.15V1436.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1436.27V1440.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1440.9V1457.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1457.27V1461.89" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M674.16 1461.89V1471.01" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M711.554 1405.31V1449.08" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M661.349 1270.39V1375.97" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1418.19V1571.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1571.39V1576.02" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1576.02V1592.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1592.39V1597.01" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1597.01V1606.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1606.14V1627.02" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1627.02V1627.03" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.5 1308.35V1430.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1418.15V1418.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1418.22V1439.4" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1439.4V1539.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1539.62V1583.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1583.34V1592.6" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1592.6V1597.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1597.22V1613.6" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1613.6V1618.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1618.22V1627.03" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1627.03V1627.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M643.2 1281V1365.37" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.724 1428.8V1428.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.724 1428.84V1582" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.724 1582V1586.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.724 1586.62V1602.99" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.724 1602.99V1607.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.724 1607.62V1637.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M164.036 1276.43V1441.7" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147.524 1266.72V1441.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M643.2 1259.77L625.048 1270.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.665 1407.57L406.575 1418.15" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.576 1418.15L406.516 1418.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M165.45 1256.07L147.524 1266.56" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1536.13L580.876 1546.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1627.03L424.724 1637.65" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1536.12L580.876 1546.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.876 1627.02L424.724 1637.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M247.153 1437.37L245.24 1438.49" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M245.24 1438.49L229.003 1447.99" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M661.349 1270.39L643.2 1281" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M625.026 1270.39L625.018 1291.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M625.018 1291.59L624.989 1354.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M555.989 1250.85V1251.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M555.989 1251.22V1302.08" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M519.685 1208.77L519.655 1280.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M537.841 1219.39V1291.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M537.533 1198.16L519.692 1208.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M549.6 1212.51L537.841 1219.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.877 1418.15L442.843 1418.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.843 1418.17L424.665 1428.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.5 1265.78L182.389 1265.85" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.389 1265.85L164.291 1276.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147.524 1266.72L251.916 1327.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M251.916 1327.77L270.443 1338.61" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M270.443 1338.61L281.814 1345.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M281.814 1345.26L305.731 1359.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M305.731 1359.25L343.257 1381.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M343.257 1381.19L351.656 1386.1" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M351.656 1386.1L355.614 1388.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M355.614 1388.42L369.614 1396.61" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M369.614 1396.61L373.572 1398.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M373.572 1398.92L380.775 1403.13" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M380.775 1403.14L406.516 1418.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.516 1418.19L406.576 1418.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.575 1418.22L424.665 1428.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424.665 1428.8L424.724 1428.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M164.278 1297.7L182.5 1308.35" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.5 1308.35L245.159 1345" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M245.159 1345L263.686 1355.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M263.686 1355.83L275.057 1362.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M275.057 1362.48L287.616 1369.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M287.616 1369.83L325.141 1391.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M325.141 1391.77L333.541 1396.69" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M333.541 1396.69L337.498 1399" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M337.498 1399L351.498 1407.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M351.498 1407.19L355.456 1409.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M355.456 1409.5L362.66 1413.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M362.66 1413.72L406.575 1439.4" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M537.841 1198.16L552.674 1206.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M552.674 1206.83L553.774 1207.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M568.097 1215.85L572.656 1218.52" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M588.083 1227.54L592.657 1230.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M607.992 1239.18L612.654 1241.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M628.158 1250.98L643.2 1259.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M643.2 1259.77L661.349 1270.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M519.692 1208.77L537.841 1219.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M537.841 1219.39L625.048 1270.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M625.048 1270.39L643.2 1281" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M537.881 1240.63L555.989 1251.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M555.989 1251.22L625.018 1291.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M625.018 1291.59L625.049 1291.61" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M165.673 1256.07L182.389 1265.85" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.389 1265.85L258.7 1310.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M258.7 1310.48L277.227 1321.31" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M277.227 1321.31L288.599 1327.96" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M288.599 1327.96L303.897 1336.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1336.91L321.822 1347.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1347.39L323.92 1348.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.92 1348.62L361.446 1370.57" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M361.446 1370.57L369.845 1375.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M369.845 1375.48L373.803 1377.79" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M373.803 1377.79L387.803 1385.98" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M387.803 1385.98L391.76 1388.29" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M391.76 1388.29L398.964 1392.51" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M398.964 1392.51L442.843 1418.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.843 1418.17L442.877 1418.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1327.25V1327.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1327.27V1339.56" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1339.56V1347.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1347.48V1383.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1383.26V1393" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1393V1397.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1397.62V1400.81" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1400.81V1405.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1405.19V1411.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1411.76V1413.99" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1413.99V1416.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1416.14V1418.33" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1418.33V1418.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1418.62V1422.78" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1422.78V1427.04" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1427.04V1427.09" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1427.09V1435.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1435.84V1471.05" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1471.05V1480.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1480.17V1484.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1484.8V1501.16" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1501.16V1505.79" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1505.79V1514.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1514.91V1536.1" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M339.974 1218.24V1339.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1327.25V1348.51" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1440.01V1445.45" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1445.45V1448.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1448.39V1449.96" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1449.96V1467.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1467.47V1492.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1492.25V1501.38" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1501.38V1506" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1506V1522.37" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1522.37V1527" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1527V1536.12" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1536.12V1536.13" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1337.92V1358.2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1358.2V1372.65" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1372.65V1382.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1382.39V1387.02" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1387.02V1390.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1390.21V1393.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1393.74V1394.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1394.59V1401.16" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1401.16V1403.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1403.39V1405.54" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1405.54V1407.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1407.72V1408.01" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1408.01V1412.18" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1412.18V1416.44" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1416.44V1416.49" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1416.49V1425.23" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1425.23V1434.08" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1434.08V1443.05" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1443.05V1445.03" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1445.03V1490.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1490.77V1495.4" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1495.4V1511.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1511.76V1516.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1516.39V1546.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.876 1546.73V1546.75" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1186.29V1186.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1186.42V1207.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1207.63V1243.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1243.27V1347.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1175.62V1175.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1175.8V1197.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1288.96V1336.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.817 1316.65L570.316 1322.79" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M570.316 1322.79L562.778 1327.2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.778 1327.2L562.665 1327.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M339.974 1175.8L321.936 1186.35" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.936 1186.35L321.822 1186.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1165.14L303.897 1175.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.024 1327.27L588.505 1333.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M588.505 1333.42L580.956 1337.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.956 1337.83L580.817 1337.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1175.8L321.936 1186.35" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.936 1186.35L461.733 1268.11" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M461.732 1268.11L562.778 1327.2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.778 1327.2L580.956 1337.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.956 1337.83L581.099 1337.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.314 1196.8L303.897 1197.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1197.14L321.822 1207.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1207.63L333.196 1214.28" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M333.196 1214.28L339.974 1218.24" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M339.974 1218.24L443.477 1278.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M443.477 1278.77L562.085 1348.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1348.51L580.509 1358.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.085 1348.14L562.727 1348.51" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M321.822 1165.14L519.655 1280.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M519.655 1280.83L537.841 1291.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M537.841 1291.47L555.989 1302.08" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M555.989 1302.08L599.024 1327.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M466.233 1592.49L484.763 1603.31" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M502.911 1592.6L484.763 1603.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M484.763 1603.21L495.726 1575.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M495.726 1575.26L500.37 1563.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M500.37 1563.42L502.724 1557.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M502.724 1557.42L511.051 1536.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M511.051 1536.19L513.405 1530.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M513.405 1530.19L518.049 1518.36" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M518.049 1518.36L540.368 1461.46" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M540.368 1461.46L542.616 1455.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M542.616 1455.72L548.206 1441.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M548.206 1441.47L549.644 1437.81" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M549.644 1437.81L553.161 1428.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M553.161 1428.84L553.796 1427.23" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M553.796 1427.23L556.657 1419.93" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M556.657 1419.93L559.481 1412.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.481 1412.74L562.272 1405.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.272 1405.62L562.287 1405.58" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.287 1405.58L562.727 1404.46" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1404.46L563.648 1402.11" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M563.648 1402.11L564.976 1398.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M564.975 1398.73L565.071 1398.49" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M565.071 1398.49L565.768 1396.71" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M565.768 1396.71L566.454 1394.96" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M566.454 1394.96L567.165 1393.15" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M567.165 1393.15L569.26 1387.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M569.26 1387.8L570.657 1384.24" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M570.657 1384.24L571.677 1381.65" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M571.677 1381.65L573.151 1377.88" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M573.151 1377.88L580.876 1358.2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M502.911 1592.49L513.816 1564.69" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M513.816 1564.69L518.46 1552.86" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M518.46 1552.86L520.814 1546.86" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M520.814 1546.86L529.141 1525.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M529.141 1525.62L531.495 1519.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M531.495 1519.62L536.139 1507.79" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M536.139 1507.79L553.961 1462.35" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M553.961 1462.35L558.458 1450.89" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M558.458 1450.89L559.551 1448.1" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.551 1448.1L560.988 1444.44" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M560.989 1444.44L562.727 1440.01" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.727 1440.01L564.506 1435.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M564.506 1435.47L565.141 1433.85" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M565.141 1433.85L568.001 1426.56" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M568.001 1426.56L570.826 1419.36" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M570.826 1419.36L573.617 1412.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M573.617 1412.25L574.992 1408.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M574.992 1408.74L576.32 1405.35" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M576.32 1405.35L576.416 1405.12" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M576.416 1405.12L577.112 1403.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M577.112 1403.34L577.798 1401.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M577.798 1401.59L578.51 1399.78" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M578.51 1399.78L580.604 1394.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.604 1394.43L580.876 1393.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M466.233 1592.49L470.873 1580.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M470.873 1580.66L473.228 1574.65" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M473.227 1574.65L481.557 1553.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M481.557 1553.42L483.912 1547.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M483.912 1547.42L488.552 1535.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M488.552 1535.59L510.875 1478.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M510.874 1478.68L524.119 1444.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M524.119 1444.92L526.353 1439.23" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M526.353 1439.23L529.709 1430.67" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M529.709 1430.67L529.867 1430.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M529.867 1430.27L531.147 1427" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M531.147 1427L533.362 1421.36" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M533.362 1421.36L534.668 1418.03" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M534.668 1418.03L535.299 1416.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M535.299 1416.42L538.16 1409.13" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M538.16 1409.13L540.984 1401.93" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M540.984 1401.93L543.753 1394.87" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M543.753 1394.87L543.776 1394.81" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M543.775 1394.81L543.79 1394.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M543.79 1394.77L545.151 1391.31" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M545.151 1391.31L546.478 1387.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M546.479 1387.92L546.574 1387.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M546.574 1387.68L547.271 1385.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M547.271 1385.9L547.957 1384.15" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M547.957 1384.15L548.668 1382.34" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M548.668 1382.34L550.763 1377" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M550.762 1377L552.16 1373.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M552.16 1373.43L553.18 1370.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M553.18 1370.84L554.654 1367.08" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M554.654 1367.08L557.764 1359.15" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M557.764 1359.15L562.085 1348.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M562.085 1348.14L562.346 1347.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M249.449 1392.13L263.686 1355.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M277.227 1321.31L303.897 1253.32" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1253.32L321.822 1207.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M267.585 1381.53L275.057 1362.48" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M288.599 1327.96L303.897 1288.96" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.897 1288.96L321.822 1243.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M219.9 1409.39L245.159 1345" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M258.7 1310.48L303.292 1196.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M514.825 1366.7L522.887 1371.41" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M522.854 1366.37L531.213 1361.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M522.887 1371.41L531.242 1366.31" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M515.001 1351.76L521.702 1347.85" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M521.702 1347.85L522.637 1347.3" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M522.637 1347.3L522.854 1347.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M524.504 1360.16C524.677 1360.94 524.772 1361.73 524.772 1362.4C524.772 1363.41 524.537 1364.63 524.057 1365.34C523.58 1366.04 522.718 1366.55 521.882 1366.63C521.038 1366.7 519.861 1366.28 518.995 1365.77C518.03 1365.21 516.904 1364.25 516.105 1363.24C515.269 1362.19 514.451 1360.71 513.97 1359.44C513.515 1358.24 513.222 1356.78 513.218 1355.65C513.215 1354.63 513.471 1353.38 513.952 1352.68C514.421 1351.99 515.28 1351.5 516.105 1351.43C516.948 1351.36 518.126 1351.77 518.995 1352.27C519.556 1352.6 520.18 1353.05 520.763 1353.57" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M520.763 1353.57C521.185 1353.95 521.588 1354.37 521.926 1354.79C522.769 1355.85 523.584 1357.35 524.057 1358.62C524.237 1359.1 524.387 1359.63 524.504 1360.16" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M522.637 1347.3C522.879 1347.21 523.125 1347.16 523.367 1347.14C524.211 1347.07 525.388 1347.48 526.257 1347.98C527.229 1348.54 528.385 1349.49 529.192 1350.5C530.035 1351.55 530.846 1353.05 531.319 1354.32C531.767 1355.52 532.034 1356.98 532.034 1358.1C532.034 1359.11 531.8 1360.34 531.319 1361.04" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M521.702 1347.85C521.977 1347.61 522.3 1347.43 522.637 1347.3" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M518.804 1363.67C518.14 1363.27 517.363 1362.59 516.813 1361.87C516.237 1361.13 515.676 1360.07 515.346 1359.18C515.03 1358.32 514.828 1357.29 514.825 1356.49C514.825 1355.76 514.997 1354.88 515.331 1354.38C515.654 1353.89 516.248 1353.54 516.813 1353.49C517.392 1353.45 518.203 1353.74 518.804 1354.09C519.472 1354.49 520.268 1355.16 520.822 1355.88C521.401 1356.63 521.962 1357.69 522.289 1358.59C522.597 1359.44 522.78 1360.48 522.78 1361.28C522.78 1361.99 522.619 1362.86 522.289 1363.36C521.959 1363.86 521.368 1364.22 520.792 1364.27C520.209 1364.33 519.399 1364.03 518.804 1363.67Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M514.825 1361.86V1366.7" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M522.887 1366.57V1371.41" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M531.242 1361.47V1366.31" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M533.186 1377.23L541.248 1381.94" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M541.215 1376.89L549.57 1371.79" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M541.248 1381.94L549.604 1376.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M533.362 1362.29L540.063 1358.37" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M540.063 1358.37L540.999 1357.82" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M540.999 1357.82L541.215 1357.7" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M542.866 1370.68C543.038 1371.46 543.133 1372.25 543.133 1372.92C543.133 1373.93 542.899 1375.15 542.418 1375.86C541.941 1376.56 541.079 1377.08 540.243 1377.15C539.399 1377.22 538.222 1376.81 537.356 1376.3C536.392 1375.73 535.266 1374.77 534.466 1373.77C533.63 1372.71 532.816 1371.23 532.331 1369.96C531.873 1368.76 531.583 1367.3 531.58 1366.17C531.576 1365.15 531.833 1363.9 532.313 1363.2C532.783 1362.51 533.641 1362.02 534.466 1361.95C535.31 1361.89 536.487 1362.29 537.356 1362.8C537.918 1363.12 538.541 1363.58 539.124 1364.1" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M539.124 1364.1C539.546 1364.47 539.95 1364.89 540.291 1365.31C541.131 1366.37 541.945 1367.87 542.418 1369.14C542.598 1369.62 542.748 1370.15 542.866 1370.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M540.999 1357.82C541.237 1357.73 541.486 1357.68 541.732 1357.66C542.572 1357.59 543.75 1358 544.619 1358.5C545.591 1359.06 546.746 1360.01 547.553 1361.02C548.393 1362.08 549.207 1363.58 549.681 1364.84C550.128 1366.04 550.396 1367.51 550.396 1368.63C550.396 1369.64 550.161 1370.86 549.681 1371.57" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M540.063 1358.37C540.338 1358.14 540.661 1357.95 540.999 1357.82" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M537.166 1374.19C536.502 1373.79 535.724 1373.11 535.174 1372.4C534.598 1371.65 534.037 1370.6 533.707 1369.7C533.392 1368.85 533.19 1367.81 533.186 1367.01C533.186 1366.29 533.359 1365.4 533.692 1364.9C534.015 1364.41 534.609 1364.06 535.174 1364.02C535.754 1363.97 536.564 1364.26 537.166 1364.62C537.833 1365.01 538.629 1365.69 539.183 1366.4C539.763 1367.15 540.32 1368.21 540.65 1369.11C540.958 1369.97 541.142 1371 541.142 1371.8C541.142 1372.51 540.98 1373.38 540.65 1373.88C540.32 1374.38 539.73 1374.75 539.154 1374.8C538.571 1374.85 537.76 1374.55 537.166 1374.19Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M533.186 1372.38V1377.23" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M541.248 1377.09V1381.94" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M549.604 1371.99V1376.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M571.13 1234.25L579.188 1238.95" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M579.155 1233.91L579.328 1233.81" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M579.328 1233.81L579.54 1233.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M579.541 1233.68L587.514 1228.81" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M579.188 1238.95L587.548 1233.86" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M571.302 1219.31L572.656 1218.52" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M572.656 1218.52L578.004 1215.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M578.004 1215.39L578.943 1214.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M578.943 1214.84L579.159 1214.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.806 1227.7C580.978 1228.48 581.074 1229.27 581.074 1229.94C581.074 1230.95 580.839 1232.18 580.358 1232.88C580.149 1233.19 579.863 1233.46 579.541 1233.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M579.54 1233.68C579.471 1233.72 579.401 1233.77 579.328 1233.81" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M579.328 1233.81C578.968 1234.01 578.576 1234.14 578.187 1234.17C577.343 1234.24 576.166 1233.83 575.297 1233.32C574.336 1232.75 573.206 1231.79 572.41 1230.79C571.574 1229.73 570.756 1228.25 570.275 1226.98C569.817 1225.78 569.524 1224.32 569.52 1223.19C569.52 1222.17 569.773 1220.92 570.253 1220.22C570.727 1219.53 571.585 1219.04 572.41 1218.97C572.803 1218.94 573.265 1219.01 573.738 1219.15" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M573.738 1219.15C574.281 1219.31 574.835 1219.55 575.297 1219.82C575.84 1220.13 576.437 1220.56 576.999 1221.06" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M576.999 1221.06L577.065 1221.12" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M577.065 1221.12C577.49 1221.5 577.89 1221.91 578.231 1222.34C579.075 1223.39 579.885 1224.89 580.358 1226.16C580.538 1226.64 580.692 1227.17 580.806 1227.7" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M578.943 1214.84C579.181 1214.76 579.427 1214.7 579.673 1214.68C580.512 1214.61 581.69 1215.02 582.559 1215.52C583.531 1216.08 584.686 1217.03 585.493 1218.04C586.337 1219.1 587.148 1220.6 587.621 1221.86C588.072 1223.06 588.336 1224.53 588.336 1225.65C588.336 1226.25 588.252 1226.94 588.083 1227.54" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M588.083 1227.54C587.966 1227.94 587.815 1228.31 587.621 1228.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M578.004 1215.39C578.279 1215.16 578.602 1214.97 578.943 1214.84" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M575.106 1231.21C574.442 1230.81 573.665 1230.13 573.118 1229.42C572.542 1228.67 571.977 1227.62 571.647 1226.72C571.332 1225.87 571.13 1224.83 571.13 1224.03C571.126 1223.31 571.302 1222.42 571.633 1221.92C571.959 1221.43 572.549 1221.08 573.118 1221.04C573.694 1220.99 574.508 1221.28 575.106 1221.64C575.774 1222.03 576.569 1222.71 577.123 1223.42C577.707 1224.17 578.264 1225.24 578.59 1226.14C578.899 1226.99 579.082 1228.02 579.082 1228.82C579.082 1229.53 578.921 1230.4 578.59 1230.9C578.26 1231.4 577.67 1231.77 577.094 1231.82C576.514 1231.87 575.704 1231.57 575.106 1231.21Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M571.13 1229.4V1234.25" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M579.188 1234.11V1238.95" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M587.547 1229.01V1233.86" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M591.006 1246.02L599.065 1250.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.035 1245.68L599.204 1245.58" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.204 1245.58L599.42 1245.45" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.42 1245.45L607.391 1240.58" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.065 1250.73L607.424 1245.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M591.179 1231.08L592.657 1230.21" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M592.657 1230.21L597.884 1227.16" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M597.884 1227.16L598.819 1226.61" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M598.819 1226.61L599.035 1226.49" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M600.686 1239.47C600.858 1240.25 600.954 1241.04 600.954 1241.71C600.954 1242.72 600.719 1243.95 600.235 1244.65C600.026 1244.96 599.743 1245.23 599.42 1245.45" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.42 1245.45C599.351 1245.49 599.277 1245.54 599.204 1245.58" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.204 1245.58C598.848 1245.78 598.452 1245.91 598.063 1245.94C597.22 1246.01 596.042 1245.6 595.177 1245.09C594.212 1244.52 593.086 1243.56 592.286 1242.56C591.45 1241.5 590.632 1240.02 590.152 1238.75C589.693 1237.55 589.403 1236.09 589.4 1234.96C589.396 1233.94 589.649 1232.7 590.133 1231.99C590.603 1231.3 591.461 1230.81 592.286 1230.74C592.844 1230.7 593.552 1230.86 594.216 1231.13" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M594.216 1231.13C594.553 1231.26 594.883 1231.42 595.177 1231.59C595.525 1231.79 595.896 1232.04 596.27 1232.33" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M596.27 1232.33C596.497 1232.5 596.721 1232.69 596.945 1232.89" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M596.945 1232.89C597.366 1233.27 597.77 1233.68 598.107 1234.11C598.951 1235.16 599.761 1236.66 600.235 1237.93C600.418 1238.41 600.568 1238.94 600.686 1239.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M598.819 1226.61C599.057 1226.53 599.307 1226.47 599.549 1226.45C600.389 1226.38 601.566 1226.79 602.439 1227.29C603.407 1227.85 604.566 1228.8 605.37 1229.81C606.213 1230.87 607.024 1232.37 607.501 1233.63C607.948 1234.84 608.216 1236.3 608.216 1237.42C608.216 1237.98 608.143 1238.61 607.992 1239.18" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M607.992 1239.18C607.875 1239.63 607.71 1240.05 607.501 1240.36" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M597.884 1227.16C598.159 1226.93 598.481 1226.74 598.819 1226.61" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M594.982 1242.98C594.318 1242.58 593.544 1241.9 592.994 1241.19C592.418 1240.44 591.857 1239.39 591.523 1238.49C591.208 1237.64 591.01 1236.6 591.006 1235.8C591.003 1235.08 591.179 1234.19 591.512 1233.69C591.835 1233.2 592.426 1232.85 592.994 1232.81C593.574 1232.76 594.384 1233.05 594.982 1233.41C595.65 1233.8 596.449 1234.48 597.003 1235.19C597.583 1235.94 598.14 1237.01 598.467 1237.91C598.778 1238.76 598.962 1239.79 598.962 1240.59C598.962 1241.3 598.8 1242.17 598.467 1242.67C598.14 1243.17 597.546 1243.54 596.97 1243.59C596.391 1243.64 595.58 1243.34 594.982 1242.98Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M591.006 1241.17V1246.02" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M599.065 1245.88V1250.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M607.424 1240.78V1245.63" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M611.238 1257.57L619.297 1262.28" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.264 1257.24L619.436 1257.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.436 1257.14L619.649 1257" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.649 1257L627.623 1252.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.297 1262.28L627.656 1257.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M611.411 1242.64L612.654 1241.91" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M612.654 1241.91L618.112 1238.72" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M618.112 1238.72L619.051 1238.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.051 1238.17L619.264 1238.05" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M620.914 1251.03C621.086 1251.81 621.182 1252.6 621.182 1253.27C621.182 1254.28 620.947 1255.51 620.467 1256.21C620.257 1256.52 619.971 1256.79 619.649 1257" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.649 1257C619.579 1257.05 619.509 1257.09 619.436 1257.14" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.436 1257.14C619.077 1257.34 618.684 1257.47 618.295 1257.5C617.452 1257.57 616.274 1257.15 615.405 1256.65C614.444 1256.08 613.314 1255.12 612.518 1254.12C611.678 1253.06 610.864 1251.58 610.38 1250.31C609.925 1249.11 609.632 1247.65 609.628 1246.52C609.624 1245.5 609.881 1244.25 610.362 1243.55C610.835 1242.86 611.693 1242.37 612.518 1242.3C612.804 1242.28 613.127 1242.31 613.465 1242.38" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M613.465 1242.38C614.121 1242.52 614.833 1242.82 615.405 1243.15C615.966 1243.47 616.59 1243.93 617.173 1244.45" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M617.173 1244.45C617.279 1244.54 617.382 1244.64 617.485 1244.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M617.485 1244.74C617.793 1245.03 618.082 1245.35 618.339 1245.66C619.183 1246.72 619.993 1248.22 620.467 1249.49C620.646 1249.97 620.8 1250.5 620.914 1251.03" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.051 1238.17C619.289 1238.08 619.535 1238.03 619.781 1238.01C620.621 1237.94 621.798 1238.35 622.667 1238.85C623.639 1239.41 624.795 1240.36 625.602 1241.37C626.445 1242.43 627.256 1243.93 627.729 1245.19C628.177 1246.39 628.444 1247.86 628.444 1248.98C628.444 1249.62 628.349 1250.35 628.158 1250.98" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M628.158 1250.98C628.048 1251.33 627.905 1251.66 627.729 1251.92" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M618.112 1238.72C618.387 1238.49 618.71 1238.3 619.051 1238.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M615.214 1254.54C614.55 1254.14 613.773 1253.46 613.226 1252.75C612.65 1252 612.086 1250.95 611.755 1250.05C611.44 1249.2 611.238 1248.16 611.238 1247.36C611.235 1246.64 611.411 1245.75 611.741 1245.25C612.067 1244.76 612.658 1244.41 613.226 1244.37C613.802 1244.32 614.613 1244.61 615.214 1244.97C615.882 1245.36 616.678 1246.04 617.231 1246.75C617.815 1247.5 618.372 1248.56 618.699 1249.46C619.007 1250.32 619.19 1251.35 619.19 1252.15C619.19 1252.86 619.029 1253.73 618.699 1254.23C618.369 1254.73 617.778 1255.1 617.202 1255.15C616.623 1255.2 615.812 1254.9 615.214 1254.54Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M611.238 1252.73V1257.57" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M619.297 1257.44V1262.28" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M627.656 1252.34V1257.19" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M551.14 1222.56L559.202 1227.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.169 1222.23L559.342 1222.12" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.342 1222.12L559.554 1221.99" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.554 1221.99L567.528 1217.13" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.202 1227.27L567.561 1222.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M551.316 1207.62L552.673 1206.83" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M552.673 1206.83L558.018 1203.71" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M558.017 1203.71L558.956 1203.16" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M558.956 1203.16L559.169 1203.04" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M560.82 1216.02C560.992 1216.8 561.088 1217.59 561.088 1218.26C561.088 1219.27 560.853 1220.49 560.372 1221.2C560.163 1221.51 559.877 1221.78 559.554 1221.99" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.554 1221.99C559.485 1222.04 559.415 1222.08 559.342 1222.12" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.342 1222.12C558.982 1222.32 558.59 1222.45 558.201 1222.49C557.357 1222.56 556.18 1222.14 555.311 1221.63C554.35 1221.07 553.22 1220.11 552.424 1219.1C551.584 1218.05 550.77 1216.57 550.289 1215.3C549.956 1214.43 549.713 1213.42 549.6 1212.51" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M549.6 1212.51C549.559 1212.16 549.537 1211.82 549.534 1211.51C549.53 1210.49 549.787 1209.24 550.267 1208.54C550.74 1207.85 551.599 1207.36 552.424 1207.29C552.82 1207.26 553.293 1207.33 553.774 1207.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M553.774 1207.47C554.309 1207.63 554.852 1207.87 555.311 1208.14C555.846 1208.44 556.437 1208.87 556.994 1209.36" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M556.994 1209.36L557.079 1209.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M557.079 1209.43C557.504 1209.81 557.904 1210.23 558.245 1210.65C559.089 1211.71 559.899 1213.21 560.372 1214.48C560.552 1214.96 560.706 1215.49 560.82 1216.02" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M558.956 1203.16C559.195 1203.07 559.441 1203.02 559.686 1203C560.526 1202.93 561.704 1203.34 562.573 1203.84C563.545 1204.4 564.7 1205.35 565.507 1206.36C566.351 1207.41 567.161 1208.91 567.635 1210.18C568.086 1211.38 568.35 1212.84 568.35 1213.96C568.35 1214.57 568.265 1215.25 568.097 1215.85" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M568.097 1215.85C567.983 1216.25 567.829 1216.62 567.635 1216.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M558.017 1203.71C558.293 1203.47 558.615 1203.29 558.956 1203.16" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M554.5 1209.64C554.716 1209.73 554.929 1209.84 555.12 1209.95C555.787 1210.35 556.583 1211.02 557.137 1211.74C557.72 1212.49 558.278 1213.55 558.604 1214.45C558.912 1215.3 559.096 1216.34 559.096 1217.14C559.096 1217.85 558.934 1218.72 558.604 1219.22C558.274 1219.72 557.684 1220.08 557.108 1220.14C556.528 1220.19 555.718 1219.89 555.12 1219.53C554.456 1219.13 553.678 1218.45 553.132 1217.73C552.556 1216.99 551.991 1215.94 551.661 1215.04C551.346 1214.18 551.144 1213.15 551.14 1212.35C551.14 1212.1 551.162 1211.84 551.203 1211.57" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M551.203 1211.57C551.28 1211.07 551.43 1210.57 551.646 1210.24C551.973 1209.75 552.563 1209.4 553.132 1209.35C553.524 1209.32 554.03 1209.45 554.5 1209.64" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M551.14 1217.72V1222.56" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M559.202 1222.43V1227.27" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M567.561 1217.33V1222.17" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M396.778 1371.94V1382.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M429.43 1352.87V1360.64" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M387.399 1366.46V1377.42" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M396.778 1382.9L413.32 1373.24" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M413.32 1373.24L413.354 1373.22" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M396.778 1371.94L403.938 1367.76" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M403.938 1367.76L403.975 1367.74" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M422.776 1356.75L429.43 1352.87" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M387.399 1366.46L394.596 1362.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M413.397 1351.27L420.051 1347.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M387.399 1377.42L396.778 1382.9" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M387.399 1366.46L396.778 1371.94" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M420.051 1347.39L429.429 1352.87" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M444.086 1344.5V1355.46" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M476.738 1325.43V1333.75" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M434.708 1339.02V1349.98" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M444.086 1355.46L460.155 1346.07" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M460.155 1346.07L460.189 1346.05" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M444.086 1344.5L450.773 1340.59" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M450.773 1340.59L450.809 1340.57" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.611 1329.59L476.738 1325.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M434.708 1339.02L441.394 1335.11" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M441.394 1335.11L441.431 1335.09" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M460.232 1324.11L467.359 1319.95" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M434.708 1349.98L444.086 1355.46" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M434.708 1339.02L444.086 1344.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M467.359 1319.95L469.439 1321.16" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M469.439 1321.16L476.738 1325.43" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.915 1503.04L150.516 1502.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.516 1502.8L150.021 1502.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.021 1502.5L142.973 1498.2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.973 1498.2L136.835 1494.45" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M136.836 1494.45L136.777 1494.42C136.777 1494.42 136.886 1494.54 136.836 1494.45Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136.835 1494.45C136.787 1494.37 136.591 1494.09 136.003 1493.32C134.808 1491.75 134.345 1488.85 134.345 1486.51C134.345 1483.92 134.963 1480.53 136.003 1477.75C137.101 1474.81 138.979 1471.34 140.933 1468.89C142.798 1466.56 145.479 1464.36 147.726 1463.06C149.742 1461.9 152.469 1460.95 154.416 1461.11C154.983 1461.15 155.556 1461.28 156.11 1461.49" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.973 1497.9C142.973 1497.9 143.391 1498.37 142.199 1496.8C141.004 1495.23 140.541 1492.33 140.541 1490C140.541 1487.4 141.159 1484.01 142.199 1481.23C143.297 1478.3 145.175 1474.82 147.129 1472.38C148.994 1470.04 151.674 1467.84 153.922 1466.54C155.938 1465.38 158.665 1464.43 160.612 1464.59C160.958 1464.62 161.306 1464.68 161.651 1464.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M161.651 1464.77C161.871 1464.82 162.09 1464.89 162.306 1464.97" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M169.107 1469.21L162.7 1465.39" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162.7 1465.39L161.651 1464.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M161.651 1464.77L156.11 1461.46" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147.089 1488.66C146.691 1490.47 146.471 1492.3 146.471 1493.85C146.471 1496.19 147.014 1499.03 148.129 1500.66C148.615 1501.37 149.272 1502 150.021 1502.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.021 1502.5C150.182 1502.6 150.348 1502.71 150.516 1502.8" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.516 1502.8C151.346 1503.27 152.26 1503.57 153.161 1503.64C155.115 1503.81 157.841 1502.85 159.852 1501.67C162.082 1500.36 164.696 1498.13 166.542 1495.81C168.482 1493.36 170.373 1489.93 171.488 1487C172.245 1485.01 172.806 1482.72 173.068 1480.62" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M173.068 1480.62C173.173 1479.78 173.23 1478.96 173.233 1478.22C173.239 1475.85 172.649 1472.96 171.534 1471.34C170.442 1469.74 168.453 1468.6 166.542 1468.44C164.595 1468.29 161.868 1469.24 159.852 1470.4C158.551 1471.15 157.106 1472.2 155.758 1473.41" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M155.758 1473.41C154.775 1474.28 153.845 1475.24 153.059 1476.23C151.105 1478.68 149.227 1482.15 148.129 1485.09C147.709 1486.21 147.358 1487.43 147.089 1488.66" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.268 1588.9L293.986 1585.68" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.986 1585.68L291.162 1583.96" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M291.163 1583.96L291.103 1583.92C291.103 1583.92 291.215 1584.04 291.163 1583.96Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291.162 1583.96C291.114 1583.87 290.916 1583.59 290.33 1582.82C289.134 1581.25 288.672 1578.35 288.672 1576.01C288.672 1573.42 289.292 1570.03 290.33 1567.25C291.43 1564.31 293.308 1560.84 295.259 1558.39C297.126 1556.05 299.804 1553.86 302.052 1552.56C304.069 1551.4 306.798 1550.45 308.742 1550.6C309.311 1550.65 309.883 1550.78 310.437 1550.99" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M297.298 1587.4C297.298 1587.4 297.717 1587.87 296.525 1586.31C295.329 1584.73 294.867 1581.83 294.867 1579.49C294.867 1576.9 295.487 1573.51 296.525 1570.73C297.005 1569.45 297.632 1568.07 298.351 1566.71" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M298.351 1566.71C299.275 1564.96 300.354 1563.25 301.454 1561.87C303.321 1559.53 306.002 1557.34 308.247 1556.04C310.264 1554.88 312.993 1553.93 314.937 1554.09C315.286 1554.12 315.634 1554.18 315.979 1554.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M315.979 1554.26C316.199 1554.32 316.415 1554.39 316.632 1554.47" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M318.143 1555.56L315.979 1554.26" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M315.979 1554.26L313.474 1552.77" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M313.474 1552.77L310.437 1550.96" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M357.316 1606.41C358.097 1605.95 359.014 1605.17 359.659 1604.36C360.342 1603.5 361.002 1602.3 361.394 1601.27C361.765 1600.29 362.003 1599.11 362.007 1598.19C362.007 1597.37 361.801 1596.35 361.409 1595.78C361.028 1595.22 360.331 1594.82 359.659 1594.77C358.977 1594.71 358.024 1595.05 357.316 1595.45C356.527 1595.91 355.588 1596.68 354.935 1597.5C354.249 1598.36 353.593 1599.57 353.208 1600.6C352.841 1601.57 352.625 1602.76 352.625 1603.67C352.625 1604.49 352.815 1605.49 353.208 1606.06C353.596 1606.63 354.293 1607.04 354.972 1607.1C355.654 1607.16 356.611 1606.83 357.316 1606.41Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M589.88 1524.12C590.39 1523.82 590.984 1523.31 591.402 1522.78C591.846 1522.23 592.275 1521.45 592.528 1520.78C592.771 1520.15 592.925 1519.38 592.925 1518.78C592.928 1518.24 592.793 1517.59 592.539 1517.22C592.29 1516.85 591.839 1516.59 591.402 1516.56C590.962 1516.52 590.339 1516.74 589.88 1517.01C589.37 1517.3 588.762 1517.8 588.336 1518.33C587.892 1518.89 587.463 1519.68 587.214 1520.35C586.975 1520.98 586.836 1521.75 586.836 1522.34C586.836 1522.87 586.961 1523.52 587.214 1523.89C587.467 1524.26 587.918 1524.53 588.358 1524.57C588.802 1524.61 589.425 1524.39 589.88 1524.12Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M502.266 1580.87C502.772 1580.57 503.366 1580.06 503.788 1579.54C504.228 1578.98 504.661 1578.2 504.914 1577.53C505.156 1576.9 505.31 1576.12 505.31 1575.53C505.314 1574.99 505.178 1574.34 504.925 1573.96C504.676 1573.6 504.225 1573.34 503.788 1573.31C503.344 1573.27 502.725 1573.49 502.266 1573.75C501.756 1574.05 501.144 1574.55 500.718 1575.08C500.274 1575.63 499.849 1576.43 499.599 1577.09C499.361 1577.73 499.222 1578.5 499.222 1579.09C499.222 1579.62 499.343 1580.27 499.599 1580.64C499.849 1581.01 500.304 1581.28 500.744 1581.32C501.188 1581.35 501.808 1581.14 502.266 1580.87Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M511.311 1557.13C511.817 1556.83 512.411 1556.32 512.833 1555.8C513.273 1555.24 513.706 1554.46 513.959 1553.79C514.201 1553.16 514.355 1552.39 514.355 1551.79C514.359 1551.25 514.223 1550.6 513.97 1550.23C513.721 1549.86 513.266 1549.6 512.833 1549.57C512.389 1549.53 511.77 1549.75 511.311 1550.01C510.798 1550.31 510.189 1550.81 509.763 1551.34C509.319 1551.9 508.894 1552.69 508.645 1553.36C508.406 1553.99 508.267 1554.76 508.267 1555.35C508.267 1555.88 508.388 1556.53 508.645 1556.9C508.894 1557.27 509.349 1557.54 509.789 1557.58C510.233 1557.62 510.853 1557.4 511.311 1557.13Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M589.88 1501.9C590.39 1501.6 590.984 1501.09 591.402 1500.56C591.846 1500.01 592.275 1499.23 592.528 1498.56C592.771 1497.92 592.925 1497.16 592.925 1496.56C592.928 1496.02 592.793 1495.37 592.539 1495C592.29 1494.63 591.839 1494.37 591.402 1494.34C590.962 1494.3 590.339 1494.52 589.88 1494.79C589.37 1495.08 588.762 1495.58 588.336 1496.11C587.892 1496.67 587.463 1497.46 587.214 1498.13C586.975 1498.76 586.836 1499.53 586.836 1500.12C586.836 1500.65 586.961 1501.3 587.214 1501.67C587.467 1502.04 587.918 1502.31 588.358 1502.35C588.802 1502.39 589.425 1502.17 589.88 1501.9Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M434.484 1616.05C434.99 1615.75 435.584 1615.25 436.006 1614.72C436.446 1614.16 436.879 1613.38 437.132 1612.71C437.374 1612.08 437.528 1611.31 437.528 1610.71C437.528 1610.17 437.396 1609.52 437.143 1609.15C436.894 1608.79 436.439 1608.52 436.006 1608.49C435.562 1608.45 434.942 1608.67 434.484 1608.93C433.97 1609.23 433.362 1609.73 432.936 1610.26C432.492 1610.82 432.067 1611.61 431.817 1612.28C431.579 1612.91 431.44 1613.68 431.44 1614.27C431.44 1614.8 431.561 1615.45 431.817 1615.82C432.067 1616.19 432.522 1616.46 432.962 1616.5C433.406 1616.54 434.025 1616.32 434.484 1616.05Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M434.484 1593.83C434.99 1593.53 435.584 1593.03 436.006 1592.5C436.446 1591.94 436.879 1591.16 437.132 1590.49C437.374 1589.86 437.528 1589.09 437.528 1588.49C437.528 1587.95 437.396 1587.3 437.143 1586.92C436.894 1586.56 436.439 1586.31 436.006 1586.27C435.562 1586.23 434.942 1586.45 434.484 1586.71C433.97 1587.01 433.362 1587.51 432.936 1588.04C432.492 1588.6 432.067 1589.39 431.817 1590.06C431.579 1590.69 431.44 1591.46 431.44 1592.05C431.44 1592.58 431.561 1593.23 431.817 1593.6C432.067 1593.97 432.522 1594.24 432.962 1594.28C433.406 1594.32 434.025 1594.1 434.484 1593.83Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M434.484 1437.86C434.99 1437.56 435.584 1437.05 436.006 1436.52C436.446 1435.97 436.879 1435.19 437.132 1434.52C437.374 1433.89 437.528 1433.12 437.528 1432.52C437.528 1431.98 437.396 1431.33 437.143 1430.96C436.894 1430.59 436.439 1430.33 436.006 1430.3C435.562 1430.26 434.942 1430.48 434.484 1430.74C433.97 1431.04 433.362 1431.54 432.936 1432.07C432.492 1432.63 432.067 1433.42 431.817 1434.08C431.579 1434.72 431.44 1435.49 431.44 1436.08C431.44 1436.61 431.561 1437.26 431.817 1437.63C432.067 1438 432.522 1438.27 432.962 1438.31C433.406 1438.35 434.025 1438.13 434.484 1437.86Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M590.665 1347.02C591.171 1346.72 591.766 1346.22 592.187 1345.69C592.627 1345.13 593.057 1344.35 593.313 1343.68C593.552 1343.05 593.706 1342.28 593.709 1341.69C593.709 1341.15 593.577 1340.49 593.321 1340.12C593.075 1339.76 592.62 1339.5 592.187 1339.46C591.744 1339.43 591.124 1339.64 590.665 1339.91C590.152 1340.2 589.543 1340.7 589.117 1341.23C588.674 1341.79 588.244 1342.58 587.995 1343.25C587.76 1343.88 587.621 1344.65 587.621 1345.24C587.621 1345.78 587.742 1346.42 587.995 1346.79C588.248 1347.16 588.699 1347.43 589.143 1347.47C589.587 1347.51 590.207 1347.29 590.665 1347.02Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M594.982 1233.41L567.443 1308.78" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M554.694 1343.82L548.128 1361.82" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1526.2 216.574C1525.86 216.24 1525.52 215.905 1525.18 215.571C1414.39 107.548 1156.47 68.2832 1077.27 96.838C1050.64 106.438 981.897 159.412 981.897 159.412L885.692 235.595C1057.77 277.502 1199.71 349.981 1311.71 452.844" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M1311.58 452.792L1312.87 453.973" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M921.797 244.901C921.797 244.901 1008.57 173.595 1078.11 133.417C1122.2 107.946 1375.31 126.562 1503.81 241.05C1628.71 359.536 1671.49 612.964 1650.65 659.806C1617.77 733.689 1555.92 827.917 1555.92 827.917" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M1409.09 180.837L1240.54 394.545" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M1175.48 124.351L1075.08 299.446" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M1078.18 133.523L1000.26 268.287" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M1295.4 142.371L1162.5 343.808" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M1526.2 216.574C1525.86 216.24 1525.52 215.905 1525.18 215.571C1414.39 107.548 1156.47 68.2832 1077.27 96.838C1050.64 106.438 981.897 159.412 981.897 159.412L885.692 235.595C1057.77 277.502 1199.71 349.981 1311.71 452.844" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1311.58 452.792L1312.87 453.973" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M921.797 244.901C921.797 244.901 1008.57 173.595 1078.11 133.417C1122.2 107.946 1375.31 126.562 1503.81 241.05C1628.71 359.536 1671.49 612.964 1650.65 659.806C1617.77 733.689 1555.92 827.917 1555.92 827.917" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M565.185 1205.74L885.461 235.778" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1526.02 216.391C1643.56 317.007 1707.3 574.386 1686.71 657.15C1679.82 684.89 1634.28 759.202 1634.28 759.202L1568.54 863.392C1510.86 694.062 1426 558.012 1314.11 455.029" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1504.04 241.061L1314.16 455.159L1312.87 453.977" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M1572.37 330.945L1378.25 521.149" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M1650.27 560.847L1487.62 678.713" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M1650.55 659.732L1525.42 751.103" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M1621.08 441.788L1435.62 594.909" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M626.457 1242.53L1568.36 863.63" stroke="white" stroke-width="2.50416" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1250.06 192.916L1116.42 268.401" stroke="white" stroke-width="2.48967" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1064.28 196.737L1005.03 360.061L585.935 1218.27" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1272.45 137.282L1250.07 192.871L1332.7 152.382" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1161.56 123.7L1156.83 176.768L1229.17 129.823" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1156.8 176.779L1116.43 268.443L1005.17 360.036" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1055.15 147.524L1064.5 196.737L1122.38 124.209" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1575.35 491.968L1513.87 633.802" stroke="white" stroke-width="2.48967" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1589.33 679.476L1434.34 754.767L606.082 1230.47" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1627.94 464.108L1575.39 491.958L1607.32 404.856" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1651.9 574.494L1600.15 584.332L1639.41 506.977" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1600.14 584.369L1513.82 633.794L1434.36 754.617" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1638.63 683.96L1589.33 679.241L1655.14 614.013" stroke="white" stroke-width="2.50416" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M556.957 1211.61L540.243 1292.87" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M532.408 1330.96L528.542 1349.77" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M576.287 1222.52L548.25 1297.56" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M535.17 1332.57L528.685 1349.92" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M617.04 1246.31L576.536 1314.1" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M557.72 1345.59L548.073 1361.73" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M520.792 1355.84L400.06 1392.87" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M351.986 1407.61L149.729 1469.64" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M538.948 1366.15L442.875 1445.15" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M406.567 1475L303.662 1559.62" stroke="white" stroke-width="2.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>

<defs>
<clipPath id="clip0_4070_18">
<rect width="1736" height="1708" fill="white"/>
</clipPath>
</defs>
</svg>

     
    </div>
  );
};

export default ScrollDrawSVG;
