import "../components/Table.css";

const HexGridTable = () => {
  const numRows = 5; // จำนวนแถว
  const numCols = 5; // จำนวนคอลัมน์

  // สร้างตารางหกเหลี่ยมโดยใช้การวน loop ใน JSX
  const renderHexGrid = () => {
    const hexGrid = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        hexGrid.push(
          <div key={`${row}-${col}`} className="hex">
            {/* สร้างภาพหรือเนื้อหาอื่น ๆ บน hexagon ตามต้องการ */}
          </div>
        );
      }
    }
    return hexGrid;
  };

  return <div className="hex-grid">{renderHexGrid()}</div>;
};

export default HexGridTable;
