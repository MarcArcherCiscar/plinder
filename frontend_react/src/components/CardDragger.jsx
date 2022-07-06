import React from 'react'

const CardDragger = () => {
  const savePin = () => {
    fetch('http://localhost:3000/store-data', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify("this.state")
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
  };

  return (
    <div>CardDragger
      <button
                type="button"
                onClick={savePin}
                className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
              >
                Save Pin
              </button>
    
    </div>
    
  )
}

export default CardDragger