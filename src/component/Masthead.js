function Masthead() {
    return (
<header className="masthead">
  {/* 배경 이미지를 위한 div 추가 */}
  <div className="background-image" style={{ backgroundImage: "url(/img/banner/banner-building.webp)", backgroundSize: "cover" }}></div>
  
  {/* 기존 컨테이너 및 텍스트 */}
  <div className="container">
    <div className="masthead-heading text-uppercase">PAY + Prism </div>
    <div className="masthead-heading text-uppercase">
      금융의 다양한 혜택을 한번에
    </div>
  </div> 
</header>
    )
}

export default Masthead;
 