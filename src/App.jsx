import { useState } from 'react'
import './App.css'

function App() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [color, setColor] = useState('#000000');
  
  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => {
      if (prev.some(obj => obj.num === index.num)) {
        return prev.filter((item) => item.num !== index.num); // remove if exists
      } else {
        return [...prev, index]; // add
      }
    });
  };
  
  const array = Array.from({ length: 256 }, (_, i) => i).reverse(); // Lager et array fra 0 til 255

  // Funksjon for å dele arrayet i grupper
  const splitArrayIntoGroups = (arr, groupSize) => {
    const groups = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      groups.push(arr.slice(i, i + groupSize));
    }
    return groups;
  };

  // Del opp i grupper på 16
  const groupsOf16 = splitArrayIntoGroups(array, 16);

  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-start  space-x-10">
        <div className="grid w-[800px] grid-cols-[repeat(16,_minmax(0,_1fr))]">
          {groupsOf16.map((el, index) => {
            if (index % 2 === 0) {
              el.reverse();
            }
            return (
              <div className="grid grid-cols-[repeat(1,_minmax(0,_1fr))]" key={index}>
                {el.map( (num, index) => {
                  const result = checkedItems.find(obj => obj.num === num);
                  
                  let colorRgb = {
                    r: 0,
                    g: 0,
                    b: 0
                  };
                  if (result === undefined) {
                    colorRgb = hexToRgb(color);
                  }

                  return (
                    
                    <div 
                        key={index}
                        className="aspect-square border border-gray-300 flex items-center text-center text-gray-300 cursor-pointer transition-all"
                        style={{
                          backgroundColor: result !== undefined ? 'rgb(' + result.color.r + ',' + result.color.g + ',' + result.color.b + ')' : '#ffffff'
                        }}
                        onClick={() => handleCheckboxChange({num: num, color: colorRgb})}
                    >
                      {num}
                    </div>
                  )
                })}
              </div>
            );

          })}        
        </div>
        <div>
          <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
          <div
            style={{
              whiteSpace: "pre-wrap",
              border: "1px solid black",
              padding: "10px",
              background: "#f9f9f9",
            }}
          >
            Data data[] = &#123;
              {checkedItems.map((el, index) => {
                return (
                  <div key={index}>
                    &#123;{el.num}, &#123;{el.color.r}, {el.color.g}, {el.color.b}&#125;&#125;,
                  </div>
                )
              })}
            &#125;;
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
