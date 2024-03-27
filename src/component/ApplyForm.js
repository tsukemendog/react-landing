function ApplyForm() {

  function clickSubmit(e) {



    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      console.log('form~~')
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }

  function clickPostNumber(e) {
    e.preventDefault();

    var width = 500; //팝업의 너비
    var height = 600; //팝업의 높이
    
    new window.daum.Postcode({
      width: width, //생성자에 크기 값을 명시적으로 지정해야 합니다.
      height: height,
      oncomplete: function(data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        console.log('data : ' + JSON.stringify(data))
        console.log('data : ' + data.zonecode)

        document.getElementById('zone-code').value = data.zonecode;
        document.getElementById('business-address').value = data.address

      }
    }).open({
      left: (window.screen.width / 2) - (width / 2),
      top: (window.screen.height / 2) - (height / 2)
    });


  }


  return (
    <div className="container" style={{backgroundColor: '#f7f7f7'}}>
      <main>
        <div
          class="text-center pb-5"
          style={{
            backgroundColor: "rgb(41, 71, 169)",
            paddingTop: "150px",
            color: "white",
          }}
        >
          {/*<img
            class="d-block mx-auto mb-4"
            src="/img/logos/paysm-logo.png"
            alt=""
          />*/}
          <h1>서비스 신청</h1>
          <p class="lead">
            결제대행서비스 페이즘의 서비스 신청화면입니다.
            <br></br>
            아래의 신청정보를 입력해주세요.
          </p>
        </div>

        <div class="row g-5 my-3">
          <div class="col-md-12 col-lg-12">
            <h3 class="mb-3">사업자 정보입력</h3>
            <form class="needs-validation pb-5" noValidate action="mailto:test@example.com?subject=subject&body=body">
              <div class="row g-3">
                <div class="col-12">
                  <label for="corp-name" class="form-label">
                    회사명
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="corp-name"
                    placeholder="예) 스카이클래스"
                    required
                  />
                  <div class="invalid-feedback">
                    회사명을 입력해주세요.
                  </div>
                </div>

                <div class="col-12">
                  <label
                    for="business-number"
                    class="form-label"
                    style={{ display: "inline-block" }}
                  >
                    사업자등록번호*&nbsp;&nbsp;
                  </label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{
                      width: "150px",
                      height: "35px",
                      display: "inline-block",
                    }}
                  >
                    <option value="1">개인 사업자</option>
                    <option value="2">법인 사업자</option>
                    <option value="3">비영리 법인</option>
                  </select>
                  <input
                    type="number"
                    class="form-control"
                    id="business-number"
                    placeholder="사업자등록번호. 예) 1234567890(-하이픈 제외)"
                    required
                  />

                  <div class="invalid-feedback">
                    사업자 등록번호를 입력해주세요.
                  </div>
                </div>

                <div class="col-12">
                  <label for="corp-name" class="form-label">
                    대표자명*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="corp-name"
                    placeholder="예) 홍길동"
                    required
                  />
                  <div class="invalid-feedback">
                    대표자명을 입력해주세요.
                  </div>
                </div>

                <div class="col-12">
                  <label for="corp-name" class="form-label">
                    대표자 생년월일*
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="corp-name"
                    placeholder="예) 900428"
                    required
                  />
                  <div class="invalid-feedback">
                    대표자 생년월일을 입력해주세요.
                  </div>
                </div>

                <div className="col-12">
                  <h5 class="mt-5 mb-2">
                    개인사업자: 대표자명의, 법인사업자:법인명의 계좌를
                    기입해주셔야 합니다.
                  </h5>
                </div>

                <div class="col-12">
                  <label for="business-number" class="form-label">
                    사업자 계좌번호
                  </label>

                  <div>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      style={{ width: "150px", display: "inline-block" }}
                    >
                      <option value="1">개인 사업자</option>
                      <option value="2">법인 사업자</option>
                      <option value="3">비영리 법인</option>
                    </select>
                    <input
                      type="number"
                      class="form-control"
                      id="business-number"
                      placeholder="예) 1234567890(-하이픈 제외)"
                      style={{ display: "inline-block", width: '300px' }}
                      required
                    />

                    <div class="invalid-feedback">
                      사업자 계좌번호를 입력해주세요.
                    </div>
                  </div>
                </div>


                <div class="col-12">
                  <label for="account-holder" class="form-label">
                    예금주명
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="account-holder"
                    placeholder="예) 홍길동"
                    required
                  />
                  <div class="invalid-feedback">
                    예금주명을 입력해주세요.
                  </div>
                </div>
                

                <div className="col-12">
                  <h5 class="mt-5 mb-2">
                    사업자등록증상 주소를 입력해주세요. 상세주소까지 입력해주셔야 합니다.
                  </h5>
                </div>



                <div class="col-12">
                  <label for="business-address" class="form-label">
                    사업장 주소*
                  </label>

                  <div>

                    <input
                      type="text"
                      class="form-control me-1"
                      id="zone-code"
                      style={{ display: "inline-block", width: '300px' }}
                      required
                    />

                    <button className="btn btn-address" onClick={clickPostNumber}>우편번호 검색</button>

                    <input
                      type="text"
                      class="form-control mt-3"
                      id="business-address"
                      placeholder="예) 대구광역시 중구 동덕로 115"
                      required
                    />

                    <input
                      type="text"
                      class="form-control mt-3"
                      id="business-address-detail"
                      placeholder="예) 진석타워즈 1115호"
                      required
                    />
                    

                    <div class="invalid-feedback">
                      사업장 주소를 입력해주세요.
                    </div>
                  </div>
                </div>


                <div class="col-12">
                  <label for="username" class="form-label">
                    사업장 대표 전화번호*
                  </label>
                  <div class="input-group has-validation" style={{width : '350px'}}>
                    <input
                      type="number"
                      class="form-control"
                      id="test1"
                      style={{ display: "inline-block" }}
                      required
                    />
                    <span class="input-group-text">-</span>
                    <input
                      type="number"
                      class="form-control"
                      id="username"
                      style={{ display: "inline-block" }}
                      required
                    />
                    <span class="input-group-text">-</span>
                    <input
                      type="number"
                      class="form-control"
                      id="username"
                      style={{ display: "inline-block" }}
                      required
                    />
                    <div class="invalid-feedback">
                      사업장 대표 전화번호를 입력해주세요.
                    </div>
                  </div>
                </div>



                <div class="col-12">
                  <label for="username" class="form-label">
                    사업장 대표 이메일*
                  </label>
                  <div class="input-group has-validation" style={{width : '350'}}>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="email"
                      required
                    />
                    <span class="input-group-text">@</span>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="예) naver.com"
                      required
                    />
                    <div class="invalid-feedback">
                      사업장 대표 이메일을 입력해주세요.
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label for="corp-name" class="form-label">
                    회사홈페이지*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="corp-name"
                    placeholder="예) https://skyclassism.com"
                  />
                </div>

                <div class="col-12">
                  <label for="corp-name" class="form-label">
                    요청사항
                  </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                


              </div>

              

              
              <hr class="my-4" />
              <button class="w-100 btn btn-primary btn-lg" onClick={clickSubmit}>
                제출
              </button>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApplyForm;
