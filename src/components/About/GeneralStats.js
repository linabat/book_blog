import React from "react";

function GeneralStats() {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <iframe
        src="http://127.0.0.1:8050"  // URL of your running Dash app
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Dash Stats"
      />
    </div>
  );
}

export default GeneralStats;
