export default `
  <div class="container">
      <div class="grid col-xm">
        <div class="wrap" id="print">
          <div class="fb-table__wrap">
          <div class="fb-table__section">
            <h3 class="fb-table__h">Стоимость отделки балконов и лоджий</h3>
            <p>* Цена указана с учетом стоимости материала</p>
          </div>
          <div class="overlow">
              <table class="fb-table table-price">
                  <thead>
                      <tr>
                          <th style="width: 35%;">
                            Услуга 
                          </th>
                          <th style="width: 45%">
                              Материал
                          </th>
                          <th style="width: 1px">
                              Ед.изм
                          </th>
                          <th>
                              Руб.
                          </th>
                      </tr>
                  </thead>
                  <tbody id="table_price"></tbody>
              </table>
          </div>
          <div style="text-align: center;"><button class="print btn-g"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-print fa-w-16"><path fill="white" d="M400 264c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm32-88V99.88c0-12.73-5.06-24.94-14.06-33.94l-51.88-51.88c-9-9-21.21-14.06-33.94-14.06H110.48C93.64 0 80 14.33 80 32v144c-44.18 0-80 35.82-80 80v128c0 8.84 7.16 16 16 16h64v96c0 8.84 7.16 16 16 16h320c8.84 0 16-7.16 16-16v-96h64c8.84 0 16-7.16 16-16V256c0-44.18-35.82-80-80-80zM128 48h192v48c0 8.84 7.16 16 16 16h48v64H128V48zm256 416H128v-64h256v64zm80-112H48v-96c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v96z"></path></svg></i> Распечатать</button></div>
        </div>
        </div>

        <div class="aside w-40">
          <div class="fb-table__wrap">
            <div class="fb-table__section">
              <h3 class="fb-table__h"><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-alarm-exclamation fa-w-16"><path fill="currentColor" d="M256 64C132.3 64 32 164.29 32 288a222.7 222.7 0 0 0 44.79 134l-40.1 40.09a16 16 0 0 0 0 22.63l22.62 22.62a16 16 0 0 0 22.63 0L122 467.22a222.82 222.82 0 0 0 268 0l40.1 40.09a16 16 0 0 0 22.62 0l22.63-22.62a16 16 0 0 0 0-22.63L435.25 422A222.69 222.69 0 0 0 480 288c0-123.71-100.26-224-224-224zm0 400a176 176 0 1 1 176-176 176 176 0 0 1-176 176zM96 0A96 96 0 0 0 0 96a94.81 94.81 0 0 0 15.3 51.26L161.2 25.68A95.63 95.63 0 0 0 96 0zm320 0a95.66 95.66 0 0 0-65.18 25.66l145.89 121.57A94.85 94.85 0 0 0 512 96a96 96 0 0 0-96-96zM256 352a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm22.3-192h-44.6a16.06 16.06 0 0 0-15.9 17.6l12.8 128a16 16 0 0 0 15.9 14.4h19a16 16 0 0 0 15.9-14.4l12.8-128a16 16 0 0 0-15.89-17.6z"></path></svg></span> Сроки</h3>

              <table class="fb-table table-price">
                <tbody id="table_sroci">
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  </div>
`.trim()
