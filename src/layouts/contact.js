import imgUrl from '../assets/diploma.jpeg'

export default `
   <div class="container">
      <div class="grid col-xm">
          <div class="aside w-40 visible-xx">
              <div class="fb-table__img">
                 <img src="${imgUrl}" alt="">
              </div>
          </div>
          <div class="wrap">
                <div class="fb-table__wrap">
                    <div class="fb-table__section">

                        <table class="fb-table table-price">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Евгений Котиков</th>
                                </tr>
                            </thead>
                            <tbody id="table_contact" class="table-contact">
                            </tbody>
                        </table>

                    </div>
                 </div>
          </div>
      </div>
  </div>
`.trim()
