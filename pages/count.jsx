import React, { useState } from "react";

const Count = () => {
  const [likeCount, setLikesCounts] = useState(null);
  const [showflag, setShowflag] = useState(false);

  const onClickCountUp = () => {
    setLikesCounts(likeCount + 1);
  };

  if(likeCount > 0 ) {
    if(likeCount % 10 === 0) {
      showflag || setShowflag(true);
    } else {
      showflag && setShowflag(false);
    }
  }

return (
  <div>
    <div>
    <button className="btn" onClick={onClickCountUp}>いいね ♡ {likeCount}</button>
    </div>
    {showflag && <div>ʕ๑•ﻌ•๑ʔ</div>}
  </div>
  );
}
export default Count;