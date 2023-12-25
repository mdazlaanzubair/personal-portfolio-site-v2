"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const TechSphere = ({ entries }) => {
  const svgRef = useRef(null);
  const { isDark } = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState(null);
  const [tooltipFontColor, setTooltipFontColor] = useState(null);
  const [fontColor, setFontColor] = useState(null);

  // VARIABLES
  const width = 480;
  const height = 480;
  const radius = "70%";
  const radiusMin = 75;
  const bgDraw = true;
  const opacityOver = 1.0;
  const opacityOut = 0.05;
  const opacitySpeed = 6;
  const fov = 800;
  const speed = 2;
  const fontFamily = "Arial, sans-serif";
  const fontSize = "15";
  const fontWeight = "normal";
  const fontStyle = "normal";
  const fontStretch = "normal";
  const fontToUpperCase = false;
  const tooltipFontFamily = "Arial, sans-serif";
  const tooltipFontSize = "15";
  const tooltipFontWeight = "normal";
  const tooltipFontStyle = "normal";
  const tooltipFontStretch = "normal";
  const tooltipFontToUpperCase = false;
  const tooltipTextAnchor = "left";
  const tooltipDiffX = 0;
  const tooltipDiffY = 10;

  useEffect(() => {
    if (isDark) {
      setBgColor("#060918");
      setTooltipFontColor("#F6F7FA")
      setFontColor("#F6F7FA")
    } else {
      setBgColor("#F6F7FA");
      setTooltipFontColor("#060918")
      setFontColor("#060918")
    }
  }, [isDark]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let entryHolder = [];
    let tooltip = null;
    let radiusValue;
    let diameter;
    let center2D;
    let bg = null;
    let mouseReact = true;
    let mousePos = { x: 0, y: 0 };
    let center3D = { x: 0, y: 0, z: 0 };
    let speedX = 0;
    let speedY = 0;
    let position = { sx: 0, cx: 0, sy: 0, cy: 0 };
    const MATHPI180 = Math.PI / 180;
    const svgNS = "http://www.w3.org/2000/svg";

    function init() {
      if (!svg) return;

      svg.addEventListener("mousemove", mouseMoveHandler);
      if (bgDraw) {
        bg = document.createElementNS(svgNS, "rect");
        bg.setAttribute("x", "0");
        bg.setAttribute("y", "0");
        bg.setAttribute("fill", bgColor);
        svg.appendChild(bg);
      }
      addEntries();
      reInit();
      animloop();
      window.addEventListener("resize", resizeHandler);
    }

    function reInit() {
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      let svgWidth = windowWidth;
      let svgHeight = windowHeight;
      if (typeof width === "string" && width.indexOf("%") > 0) {
        svgWidth = Math.round(
          (svgRef.current?.offsetWidth || 0 / 100) * parseInt(width)
        );
        svgHeight = Math.round((svgWidth / 100) * parseInt(height));
      } else {
        svgWidth = typeof width === "number" ? width : parseInt(width);
        svgHeight = typeof height === "number" ? height : parseInt(height);
      }
      if (windowWidth <= svgWidth) svgWidth = windowWidth;
      if (windowHeight <= svgHeight) svgHeight = windowHeight;
      center2D = { x: svgWidth / 2, y: svgHeight / 2 };
      speedX = speed / center2D.x;
      speedY = speed / center2D.y;
      if (svgWidth >= svgHeight)
        diameter = (svgHeight / 100) * parseInt(radius);
      else diameter = (svgWidth / 100) * parseInt(radius);
      if (diameter < 1) diameter = 1;
      radiusValue = diameter / 2;
      if (radiusValue < radiusMin) {
        radiusValue = radiusMin;
        diameter = radiusValue * 2;
      }
      svg.setAttribute("width", svgWidth.toString());
      svg.setAttribute("height", svgHeight.toString());
      if (bgDraw && bg) {
        bg.setAttribute("width", svgWidth.toString());
        bg.setAttribute("height", svgHeight.toString());
      }
      setEntryPositions(radiusValue);
    }

    function setEntryPositions(radius) {
      for (let i = 0, l = entryHolder.length; i < l; i++) {
        setEntryPosition(entryHolder[i], radius);
      }
    }

    function setEntryPosition(entry, radius) {
      const dx = entry.vectorPosition.x - center3D.x;
      const dy = entry.vectorPosition.y - center3D.y;
      const dz = entry.vectorPosition.z - center3D.z;
      const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
      entry.vectorPosition.x /= length;
      entry.vectorPosition.y /= length;
      entry.vectorPosition.z /= length;
      entry.vectorPosition.x *= radius;
      entry.vectorPosition.y *= radius;
      entry.vectorPosition.z *= radius;
    }

    function addEntry(index, entryObj, x, y, z) {
      const entry = {};
      if (typeof entryObj.label !== "undefined") {
        entry.element = document.createElementNS(svgNS, "text");
        entry.element.setAttribute("x", "0");
        entry.element.setAttribute("y", "0");
        entry.element.setAttribute("fill", fontColor);
        entry.element.setAttribute("font-family", fontFamily);
        entry.element.setAttribute("font-size", fontSize);
        entry.element.setAttribute("font-weight", fontWeight);
        entry.element.setAttribute("font-style", fontStyle);
        entry.element.setAttribute("font-stretch", fontStretch);
        entry.element.setAttribute("text-anchor", "middle");
        entry.element.textContent = fontToUpperCase
          ? entryObj.label.toUpperCase()
          : entryObj.label;
      } else if (typeof entryObj.image !== "undefined") {
        entry.element = document.createElementNS(svgNS, "image");
        entry.element.setAttribute("x", "0");
        entry.element.setAttribute("y", "0");
        entry.element.setAttribute("width", entryObj.width?.toString() || "");
        entry.element.setAttribute("height", entryObj.height?.toString() || "");
        entry.element.setAttribute("id", "image_" + index);
        entry.element.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          entryObj.image
        );
        entry.diffX = entryObj.width ? entryObj.width / 2 : 0;
        entry.diffY = entryObj.height ? entryObj.height / 2 : 0;
      }
      entry.link = document.createElementNS(svgNS, "a");
      entry.link.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        entryObj.url
      );
      entry.link.setAttribute("target", entryObj.target);
      entry.link.addEventListener("mouseover", mouseOverHandler, true);
      entry.link.addEventListener("mouseout", mouseOutHandler, true);
      entry.link.appendChild(entry.element);
      if (typeof entryObj.tooltip !== "undefined") {
        entry.tooltip = true;
        entry.tooltipLabel = tooltipFontToUpperCase
          ? entryObj.tooltip.toUpperCase()
          : entryObj.tooltip;
      } else {
        entry.tooltip = false;
      }
      entry.index = index;
      entry.mouseOver = false;
      entry.vectorPosition = { x, y, z };
      entry.vector2D = { x: 0, y: 0 };
      svg.appendChild(entry.link);
      return entry;
    }

    function addEntries() {
      let tooltip = false;
      for (let i = 1, l = entries.length + 1; i < l; i++) {
        const phi = Math.acos(-1 + (2 * i) / l);
        const theta = Math.sqrt(l * Math.PI) * phi;
        const x = Math.cos(theta) * Math.sin(phi);
        const y = Math.sin(theta) * Math.sin(phi);
        const z = Math.cos(phi);
        const entry = addEntry(i - 1, entries[i - 1], x, y, z);
        entryHolder.push(entry);
        if (typeof entries[i - 1].tooltip !== "undefined") {
          tooltip = true;
        }
      }
      if (tooltip) {
        addTooltip();
      }
    }

    function addTooltip() {
      tooltip = document.createElementNS(svgNS, "text");
      tooltip.setAttribute("x", "0");
      tooltip.setAttribute("y", "0");
      tooltip.setAttribute("fill", tooltipFontColor);
      tooltip.setAttribute("font-family", tooltipFontFamily);
      tooltip.setAttribute("font-size", tooltipFontSize);
      tooltip.setAttribute("font-weight", tooltipFontWeight);
      tooltip.setAttribute("font-style", tooltipFontStyle);
      tooltip.setAttribute("font-stretch", tooltipFontStretch);
      tooltip.setAttribute("text-anchor", tooltipTextAnchor);
      tooltip.textContent = "";
      svg.appendChild(tooltip);
    }

    function getEntryByElement(element) {
      for (let i = 0, l = entryHolder.length; i < l; i++) {
        const entry = entryHolder[i];
        if (
          entry.element.getAttribute("x") === element.getAttribute("x") &&
          entry.element.getAttribute("y") === element.getAttribute("y")
        ) {
          return entry;
        }
      }
      return undefined;
    }

    function highlightEntry(entry) {
      for (let i = 0, l = entryHolder.length; i < l; i++) {
        const e = entryHolder[i];
        if (e.index === entry.index) {
          e.mouseOver = true;
        } else {
          e.mouseOver = false;
        }
      }
    }

    function showTooltip(entry) {
      if (entry.tooltip && tooltip) {
        tooltip.setAttribute("x", (entry.vector2D.x - tooltipDiffX).toString());
        tooltip.setAttribute("y", (entry.vector2D.y - tooltipDiffY).toString());
        tooltip.textContent = tooltipFontToUpperCase
          ? entry.tooltipLabel.toUpperCase()
          : entry.tooltipLabel;
        tooltip.setAttribute("opacity", "1.0");
      }
    }

    function hideTooltip(entry) {
      if (tooltip) {
        tooltip.setAttribute("opacity", "0.0");
      }
    }

    function render() {
      const fx = speedX * mousePos.x - speed;
      const fy = speed - speedY * mousePos.y;
      const angleX = fx * MATHPI180;
      const angleY = fy * MATHPI180;
      position.sx = Math.sin(angleX);
      position.cx = Math.cos(angleX);
      position.sy = Math.sin(angleY);
      position.cy = Math.cos(angleY);
      for (let i = 0, l = entryHolder.length; i < l; i++) {
        const entry = entryHolder[i];
        if (mouseReact) {
          const rx = entry.vectorPosition.x;
          const rz =
            entry.vectorPosition.y * position.sy +
            entry.vectorPosition.z * position.cy;
          entry.vectorPosition.x = rx * position.cx + rz * position.sx;
          entry.vectorPosition.y =
            entry.vectorPosition.y * position.cy +
            entry.vectorPosition.z * -position.sy;
          entry.vectorPosition.z = rx * -position.sx + rz * position.cx;
        }
        const scale = fov / (fov + entry.vectorPosition.z);
        entry.vector2D.x = entry.vectorPosition.x * scale + center2D.x;
        entry.vector2D.y = entry.vectorPosition.y * scale + center2D.y;
        if (entry.diffX && entry.diffY) {
          entry.vector2D.x -= entry.diffX;
          entry.vector2D.y -= entry.diffY;
        }
        entry.element.setAttribute("x", entry.vector2D.x.toString());
        entry.element.setAttribute("y", entry.vector2D.y.toString());
        let opacity;
        if (mouseReact) {
          opacity = (radiusValue - entry.vectorPosition.z) / diameter;
          if (opacity < opacityOut) {
            opacity = opacityOut;
          }
        } else {
          opacity = parseFloat(entry.element.getAttribute("opacity") || "0");
          if (entry.mouseOver) {
            opacity += (opacityOver - opacity) / opacitySpeed;
          } else {
            opacity += (opacityOut - opacity) / opacitySpeed;
          }
        }
        entry.element.setAttribute("opacity", opacity.toString());
      }
      entryHolder = entryHolder.sort(
        (a, b) => b.vectorPosition.z - a.vectorPosition.z
      );
    }

    function animloop() {
      requestAnimationFrame(animloop);
      render();
    }

    function mouseOverHandler(event) {
      mouseReact = false;
      const entry = getEntryByElement(event.target);
      if (entry) {
        highlightEntry(entry);
        if (entry.tooltip) {
          showTooltip(entry);
        }
      }
    }

    function mouseOutHandler(event) {
      mouseReact = true;
      const entry = getEntryByElement(event.target);
      if (entry && entry.tooltip) {
        hideTooltip(entry);
      }
    }

    function mouseMoveHandler(event) {
      mousePos = getMousePos(svg, event);
    }

    function getMousePos(svg, event) {
      const rect = svg.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    function resizeHandler(event) {
      reInit();
    }

    init();
  }, [entries, bgColor]);

  return <svg ref={svgRef} className="rounded-3xl border-none border-transparent"></svg>;
};

export default TechSphere;
