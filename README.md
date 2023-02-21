                <svg width="70" height="70">
                  <use href="./images/icons.svg#icon-antenna"></use>
                </svg>

transition-property: color, background-color, box-shadow; transition-duration: var(--duration);
transition-timing-function: var(--timing-function);

<!-- альтернтива форми -->

          <label class="modal-form-group">

<span class="modal-form-label">Ім'я</span> <input
                class="modal-form-input"
                type="text"
                name="user_name"
                 /> <svg class="modal-form-icon" width=18" height="18">
<use href="./images/icons.svg#icon-antenna"></use> </svg>

<!-- чекбокс Ярослав индекс -->
<div class="modal-checkbox" role="group">
            <input class="modal-form-checkbox" type="checkbox" name="modal_checkbox" id="modal_checkbox" />
            <label class="modal-label-checkbox" for="modal_checkbox"
              >Погоджуюся з розсилкою та приймаю <a href="">Умови договору</a></label
            >
          </div>

          <!-- чекбокс Ярослав ССС -->
          /* чекбокс */

.modal-checkbox { display: flex; gap: 7px; margin-bottom: 30px; align-items: center;
justify-content: center; }

.modal-label-checkbox { display: block;

font-weight: 400; font-size: 14px; line-height: 1.7; letter-spacing: 0.03em;

color: var(--paragraf-text-color); }

.modal-label-checkbox a { color: var(--accent-color); text-decoration: underline; }

.modal-form-checkbox { appearance: none; width: 16px; height: 15px;

border: 2px solid var(--modal-icon-color-main); border-radius: 2px; box-shadow: 0px 4px 4px rgba(0,
0, 0, 0.25); }

.modal-form-checkbox:checked { appearance: none; border: none; background-color:
var(--accent-color); border-radius: 2px; box-shadow: none; background-size: contain;
background-image: url(../images/studio/check.svg); }

/\* .modal-form-checkbox { appearance: none; width: 16px; height: 15px;

background: #2196F3; border-radius: 2px; } \*/
