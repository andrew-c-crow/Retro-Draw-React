import React from 'react';

/* Need to build a blank cell list when user clicks CLEAR ALL */
import { buildCellList } from '../utils';

/**
 * The ActionPanel component represents the interface for updating the Grid
 * based on any number of buttons the user might click on.
 */
const ActionPanel = ({activeColor, cellList, setCellList}) => {
  /**
   * Create constants for activeColor, cellList, and setCellList, reading them from the props
   */

  function fillEmpty() {
    const newList = buildCellList()

    cellList.forEach((e, i)=>{
      if (e.color === null){
        newList[i].color = activeColor
      } else {
        newList[i].color = e.color
      }
    })
    setCellList(newList)
  }

  return <div className="action-panel">
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - passes the new cell list to setCellList
    */}
    <button
    onClick={()=>{
      const newList = buildCellList()
      setCellList(newList)
    }}
    >clear all</button>
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over it, setting the color on each cell to activeColor
        - passes the new cell list to setCellList
    */}
    <button
    onClick={function(){
      const newList = buildCellList()
      newList.forEach((e)=>{
        e.color = activeColor
      })
      setCellList(newList)
    }}
    >fill all</button>
    {/* 
      This buttonm needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over the original cellList, and for each cell in it:
          - set the corresponding (by index) new cell to its color (if it has one) OR
          - set the corresponding (by index) new cell to the activeColor
    */}
    <button
    onClick={fillEmpty}
    >fill empty</button>
  </div>
}

export default ActionPanel;