import { useState, useCallback } from "react";
import React from 'react';
import Tree from "./Tree";

export default function Tree2() {
  const [translate, setTranslate] = useState({});
  const [debugData, setDebugData] = useState({
    name: "Root",
    children: [
      {
        name: "Child 1",
        children: [
          { name: "Grandchild 1" },
          { name: "Grandchild 2" },
          { name: "Grandchild 3" }
        ]
      },
      {
        name: "Child 2",
        children: [
          { name: "Grandchild 4" },
          { name: "Grandchild 5" },
          { name: "Grandchild 6" }
        ]
      },
      {
        name: "Child 3",
        children: [
          { name: "Grandchild 7" },
          { name: "Grandchild 8" },
          { name: "Grandchild 9" }
        ]
      }
    ]
  });

  const handleNodeToggle = useCallback(
    node => {
      // Clone the entire data tree to avoid mutation
      const newData = JSON.parse(JSON.stringify(debugData));
      // Find the node that was toggled
      const findNode = (node, data) => {
        if (data.name === node.name) {
          return data;
        } else if (data.children) {
          for (let i = 0; i < data.children.length; i++) {
            const foundNode = findNode(node, data.children[i]);
            if (foundNode) {
              return foundNode;
            }
          }
        }
        return null;
      };
      const toggledNode = findNode(node, newData);
      // Toggle the collapsed state of the node
      toggledNode.collapsed = !toggledNode.collapsed;
      // Update the state with the new data tree
      setDebugData(newData);
    },
    [debugData]
  );

  const handleDimensionsChange = useCallback(() => {
    const dimensions = treeContainerRef.current.getBoundingClientRect();
    setTranslate({
      x: dimensions.width / 3,
      y: dimensions.height / 2
    });
  }, []);
  const containerStyles = {
    height: 500,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const treeContainerRef = React.createRef();  

  return (
    <div style={containerStyles} ref={treeContainerRef}>
      <Tree
        data={debugData}
        translate={translate}
        orientation={"vertical"}
        collapsible={true}
        onToggle={handleNodeToggle}
        onMove={handleDimensionsChange}
        separation={{siblings: 0.5, nonSiblings: 1.25}}
      />
    </div>
  );
}
