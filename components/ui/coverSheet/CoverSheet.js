import React from "react";
import smoothscroll from "smoothscroll-polyfill";

import styles from "./coverSheet.module.scss";

const DownArrow = (props = {}) => (
  <svg {...props} viewBox="0 0 14 18">
    <path
      d="M7.763 17.372a.8.8 0 0 1-1.131 0L.63 11.367a.8.8 0 0 1 1.131-1.132l4.643 4.645V.808a.8.8 0 1 1 1.6 0v14.058l4.63-4.631a.8.8 0 0 1 1.131 1.132z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

const AuxanoLogoWhite = (props = {}) => (
  <svg {...props} viewBox="0 0 358 166" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m17.1728516 156.490234v5.009766h-1.6875v-12.796875h4.7197265c1.4003977 0 2.4975546.357418 3.2915039 1.072266.7939493.714847 1.190918 1.661127 1.190918 2.838867 0 1.242194-.3881797 2.198727-1.1645508 2.869629s-1.8881763 1.006347-3.3354492 1.006347zm0-1.379882h3.0322265c.9023483 0 1.5937476-.212401 2.0742188-.637207.4804711-.424807.7207031-1.038571.7207031-1.841309 0-.761723-.240232-1.371092-.7207031-1.828125-.4804712-.457034-1.1396443-.694336-1.9775391-.711914h-3.1289062zm14.0097656-1.661133c-.246095-.041016-.5126939-.061524-.7998047-.061524-1.0664116 0-1.7900372.454097-2.1708984 1.362305v6.75h-1.6259766v-9.509766h1.5820313l.0263671 1.098633c.5332058-.849613 1.2890576-1.274414 2.2675782-1.274414.3164078 0 .5566398.041015.7207031.123047zm3.2607422 8.050781h-1.6259766v-9.509766h1.6259766zm-1.7578125-12.032227c0-.263673.0805656-.486327.2416992-.667968.1611336-.181642.3999008-.272461.7163086-.272461s.5566398.090819.7207031.272461c.1640633.181641.2460938.404295.2460938.667968 0 .263674-.0820305.483398-.2460938.65918s-.4042953.263672-.7207031.263672-.555175-.08789-.7163086-.263672-.2416992-.395506-.2416992-.65918zm7.4970703 9.826172 2.3554687-7.303711h1.6611329l-3.4101563 9.509766h-1.2392578l-3.4453125-9.509766h1.6611328zm11.3203125 2.206055c-.0937505-.187501-.1699216-.521482-.2285156-1.001953-.7558632.78516-1.6581979 1.177734-2.7070313 1.177734-.9375047 0-1.70654-.265134-2.3071289-.79541s-.9008789-1.202633-.9008789-2.01709c0-.990239.3764611-1.759274 1.1293945-2.307129.7529335-.547854 1.8120049-.821777 3.1772461-.821777h1.5820313v-.74707c0-.568363-.1699202-1.020995-.5097657-1.35791-.3398454-.336916-.840817-.505372-1.5029296-.505372-.5800811 0-1.0664043.146483-1.4589844.439454-.3925801.29297-.5888672.647458-.5888672 1.063476h-1.6347656c0-.474612.1684553-.933103.5053711-1.375488.3369157-.442385.7939424-.792479 1.3710937-1.050293s1.2114223-.386719 1.902832-.386719c1.0957087 0 1.9540985.273923 2.5751954.821777.6210968.547855.9433592 1.302242.9667968 2.263184v4.376953c0 .873051.111327 1.56738.3339844 2.083008v.140625zm-2.6982422-1.239258c.5097682 0 .9931618-.131834 1.4501953-.395508.4570335-.263673.7880849-.606443.9931641-1.02832v-1.951172h-1.2744141c-1.9921974 0-2.9882812.583002-2.9882812 1.749024 0 .509768.1699201.908201.5097656 1.195312.3398454.287111.7763645.430664 1.3095703.430664zm8.8242187-10.573242v2.302734h1.7753907v1.256836h-1.7753907v5.897461c0 .380862.0791008.666503.2373047.856934.158204.19043.4277325.285644.8085938.285644.1875009 0 .4453108-.035156.7734375-.105468v1.318359c-.4277365.117188-.843748.175781-1.2480469.175781-.7265661 0-1.2744122-.219724-1.6435547-.659179-.3691424-.439456-.5537109-1.063473-.5537109-1.872071v-5.897461h-1.7314453v-1.256836h1.7314453v-2.302734zm7.6201172 11.988281c-1.2890689 0-2.3378865-.423335-3.1464843-1.270019s-1.2128907-1.978997-1.2128907-3.396973v-.298828c0-.943364.180174-1.785641.5405274-2.526856.3603533-.741214.8642546-1.321286 1.5117187-1.740234.6474642-.418947 1.3491173-.628418 2.1049805-.628418 1.2363343 0 2.1972622.407223 2.8828125 1.22168s1.0283203 1.980461 1.0283203 3.498047v.676758h-6.4423828c.0234376.937504.2973607 1.694821.8217773 2.271972.5244167.577151 1.190914.865723 1.9995118.865723.5742216 0 1.0605448-.117187 1.4589843-.351563s.7470689-.54492 1.0458985-.93164l.993164.773437c-.7968789 1.224616-1.9921795 1.836914-3.5859375 1.836914zm-.2021484-8.52539c-.6562533 0-1.207029.238767-1.6523438.716308-.4453147.477542-.7207025 1.146969-.8261718 2.008301h4.7636718v-.123047c-.0468752-.826176-.2695292-1.466306-.6679687-1.92041s-.9374966-.681152-1.6171875-.681152zm13.2626953 4.315429.2460938 1.6875.3603515-1.520508 2.53125-8.929687h1.4238282l2.4697265 8.929687.3515625 1.546876.272461-1.722657 1.9863281-8.753906h1.696289l-3.102539 12.796875h-1.538086l-2.6367187-9.325195-.2021484-.975586-.2021485.975586-2.7333984 9.325195h-1.538086l-3.09375-12.796875h1.6875zm16.6289063 4.209961c-1.289069 0-2.3378866-.423335-3.1464844-1.270019s-1.2128906-1.978997-1.2128906-3.396973v-.298828c0-.943364.1801739-1.785641.5405273-2.526856.3603534-.741214.8642546-1.321286 1.5117188-1.740234.6474641-.418947 1.3491173-.628418 2.1049804-.628418 1.2363343 0 2.1972622.407223 2.8828125 1.22168s1.0283203 1.980461 1.0283203 3.498047v.676758h-6.4423828c.0234376.937504.2973607 1.694821.8217774 2.271972s1.1909139.865723 1.9995117.865723c.5742216 0 1.0605449-.117187 1.4589844-.351563s.7470688-.54492 1.0458984-.93164l.9931641.773437c-.796879 1.224616-1.9921796 1.836914-3.5859375 1.836914zm-.2021485-8.52539c-.6562533 0-1.207029.238767-1.6523437.716308-.4453148.477542-.7207026 1.146969-.8261719 2.008301h4.7636719v-.123047c-.0468753-.826176-.2695293-1.466306-.6679688-1.92041s-.9374966-.681152-1.6171875-.681152zm11.6630859 8.349609c-.09375-.187501-.169922-.521482-.228516-1.001953-.755863.78516-1.658197 1.177734-2.707031 1.177734-.937504 0-1.70654-.265134-2.307129-.79541s-.900879-1.202633-.900879-2.01709c0-.990239.376461-1.759274 1.129395-2.307129.752933-.547854 1.812005-.821777 3.177246-.821777h1.582031v-.74707c0-.568363-.16992-1.020995-.509765-1.35791-.339846-.336916-.840817-.505372-1.50293-.505372-.580081 0-1.066404.146483-1.458984.439454-.392581.29297-.588868.647458-.588868 1.063476h-1.634765c0-.474612.168455-.933103.505371-1.375488s.793942-.792479 1.371094-1.050293c.577151-.257814 1.211422-.386719 1.902832-.386719 1.095708 0 1.954098.273923 2.575195.821777.621097.547855.943359 1.302242.966797 2.263184v4.376953c0 .873051.111327 1.56738.333984 2.083008v.140625zm-2.698242-1.239258c.509768 0 .993162-.131834 1.450195-.395508.457034-.263673.788085-.606443.993164-1.02832v-1.951172h-1.274414c-1.992197 0-2.988281.583002-2.988281 1.749024 0 .509768.16992.908201.509766 1.195312.339845.287111.776364.430664 1.30957.430664zm8.384766 1.239258h-1.625977v-13.5h1.625977zm4.807617-11.8125v2.302734h1.77539v1.256836h-1.77539v5.897461c0 .380862.0791.666503.237304.856934.158204.19043.427733.285644.808594.285644.187501 0 .445311-.035156.773438-.105468v1.318359c-.427737.117188-.843748.175781-1.248047.175781-.726566 0-1.274412-.219724-1.643555-.659179-.369142-.439456-.553711-1.063473-.553711-1.872071v-5.897461h-1.731445v-1.256836h1.731445v-2.302734zm5.299804 3.454102c.720707-.88477 1.658198-1.327149 2.8125-1.327149 2.009776 0 3.023438 1.133778 3.041016 3.401367v6.28418h-1.625977v-6.292969c-.005859-.68555-.162596-1.192381-.470214-1.520508-.307619-.328126-.786618-.492187-1.437012-.492187-.527347 0-.990233.140624-1.388672.421875s-.708983.650388-.931641 1.107422v6.776367h-1.625976v-13.5h1.625976zm15.178711-4.438477 4.183594 10.441406 4.183594-10.441406h2.188476v12.796875h-1.6875v-4.983398l.158204-5.378907-4.201172 10.362305h-1.291993l-4.192382-10.335938.166992 5.35254v4.983398h-1.6875v-12.796875zm19.151368 12.796875c-.093751-.187501-.169922-.521482-.228516-1.001953-.755863.78516-1.658198 1.177734-2.707031 1.177734-.937505 0-1.70654-.265134-2.307129-.79541s-.900879-1.202633-.900879-2.01709c0-.990239.376461-1.759274 1.129394-2.307129.752934-.547854 1.812005-.821777 3.177246-.821777h1.582032v-.74707c0-.568363-.16992-1.020995-.509766-1.35791-.339845-.336916-.840817-.505372-1.50293-.505372-.580081 0-1.066404.146483-1.458984.439454-.39258.29297-.588867.647458-.588867 1.063476h-1.634766c0-.474612.168456-.933103.505371-1.375488.336916-.442385.793943-.792479 1.371094-1.050293s1.211422-.386719 1.902832-.386719c1.095709 0 1.954099.273923 2.575195.821777.621097.547855.94336 1.302242.966797 2.263184v4.376953c0 .873051.111327 1.56738.333985 2.083008v.140625zm-2.698243-1.239258c.509768 0 .993162-.131834 1.450196-.395508.457033-.263673.788085-.606443.993164-1.02832v-1.951172h-1.274414c-1.992198 0-2.988282.583002-2.988282 1.749024 0 .509768.169921.908201.509766 1.195312s.776365.430664 1.30957.430664zm8.15625-8.270508.052735 1.195313c.726566-.914067 1.675775-1.371094 2.847656-1.371094 2.009776 0 3.023437 1.133778 3.041016 3.401367v6.28418h-1.625977v-6.292969c-.005859-.68555-.162596-1.192381-.470215-1.520508-.307619-.328126-.786618-.492187-1.437012-.492187-.527346 0-.990232.140624-1.388671.421875-.39844.281251-.708984.650388-.931641 1.107422v6.776367h-1.625977v-9.509766zm14.264649 9.509766c-.093751-.187501-.169922-.521482-.228516-1.001953-.755863.78516-1.658198 1.177734-2.707031 1.177734-.937505 0-1.70654-.265134-2.307129-.79541s-.900879-1.202633-.900879-2.01709c0-.990239.376461-1.759274 1.129395-2.307129.752933-.547854 1.812004-.821777 3.177246-.821777h1.582031v-.74707c0-.568363-.16992-1.020995-.509766-1.35791-.339845-.336916-.840817-.505372-1.502929-.505372-.580081 0-1.066405.146483-1.458985.439454-.39258.29297-.588867.647458-.588867 1.063476h-1.634766c0-.474612.168456-.933103.505372-1.375488.336915-.442385.793942-.792479 1.371093-1.050293.577152-.257814 1.211423-.386719 1.902832-.386719 1.095709 0 1.954099.273923 2.575196.821777.621096.547855.943359 1.302242.966797 2.263184v4.376953c0 .873051.111327 1.56738.333984 2.083008v.140625zm-2.698242-1.239258c.509768 0 .993161-.131834 1.450195-.395508.457033-.263673.788085-.606443.993164-1.02832v-1.951172h-1.274414c-1.992198 0-2.988281.583002-2.988281 1.749024 0 .509768.16992.908201.509765 1.195312.339846.287111.776365.430664 1.309571.430664zm6.231445-3.594726c0-1.48243.34277-2.661617 1.02832-3.537598s1.593745-1.313965 2.72461-1.313965c1.160162 0 2.065426.410152 2.71582 1.230469l.079101-1.054688h1.485352v9.28125c0 1.230475-.364742 2.200192-1.094238 2.90918s-1.709467 1.063477-2.939942 1.063477c-.68555 0-1.356442-.146483-2.012695-.439453-.656253-.292971-1.157225-.694334-1.50293-1.204102l.84375-.975586c.697269.861332 1.5498 1.291992 2.557617 1.291992.79102 0 1.407713-.222654 1.850098-.667969.442385-.445314.663574-1.072261.663574-1.880859v-.817383c-.650394.750004-1.53808 1.125-2.663086 1.125-1.113286 0-2.014156-.448237-2.702636-1.344726s-1.032715-2.118157-1.032715-3.665039zm1.634765.18457c0 1.072271.219725 1.914548.65918 2.526855.439456.612308 1.054684.918457 1.845703.918457 1.025396 0 1.778318-.465815 2.258789-1.39746v-4.341797c-.498049-.908208-1.245112-1.362305-2.241211-1.362305-.791019 0-1.409177.307614-1.854492.922852-.445314.615237-.667969 1.526361-.667969 2.733398zm12.796876 4.825195c-1.289069 0-2.337887-.423335-3.146485-1.270019s-1.212891-1.978997-1.212891-3.396973v-.298828c0-.943364.180174-1.785641.540528-2.526856.360353-.741214.864254-1.321286 1.511719-1.740234.647464-.418947 1.349117-.628418 2.10498-.628418 1.236334 0 2.197262.407223 2.882813 1.22168.68555.814457 1.02832 1.980461 1.02832 3.498047v.676758h-6.442383c.023438.937504.297361 1.694821.821777 2.271972.524417.577151 1.190914.865723 1.999512.865723.574222 0 1.060545-.117187 1.458984-.351563.39844-.234376.747069-.54492 1.045899-.93164l.993164.773437c-.796879 1.224616-1.99218 1.836914-3.585937 1.836914zm-.202149-8.52539c-.656253 0-1.207029.238767-1.652344.716308-.445314.477542-.720702 1.146969-.826172 2.008301h4.763672v-.123047c-.046875-.826176-.269529-1.466306-.667968-1.92041-.39844-.454104-.937497-.681152-1.617188-.681152zm7.321289-1.160157.043945 1.054688c.69727-.820317 1.63769-1.230469 2.821289-1.230469 1.330085 0 2.23535.509761 2.715821 1.529297.316408-.457034.728025-.82617 1.234863-1.107422.506839-.281251 1.105954-.421875 1.797363-.421875 2.085948 0 3.146485 1.104481 3.181641 3.313477v6.37207h-1.625977v-6.275391c0-.679691-.155271-1.187986-.46582-1.524902-.310548-.336916-.832027-.505371-1.564453-.505371-.603519 0-1.10449.180174-1.50293.540527-.398439.360354-.629882.845212-.694336 1.45459v6.310547h-1.634765v-6.231445c0-1.38282-.676751-2.074219-2.030274-2.074219-1.066411 0-1.795896.454097-2.188476 1.362305v6.943359h-1.625977v-9.509766zm18.19336 9.685547c-1.289069 0-2.337887-.423335-3.146485-1.270019s-1.212891-1.978997-1.212891-3.396973v-.298828c0-.943364.180174-1.785641.540528-2.526856.360353-.741214.864254-1.321286 1.511719-1.740234.647464-.418947 1.349117-.628418 2.10498-.628418 1.236334 0 2.197262.407223 2.882813 1.22168.68555.814457 1.02832 1.980461 1.02832 3.498047v.676758h-6.442383c.023438.937504.297361 1.694821.821777 2.271972.524417.577151 1.190914.865723 1.999512.865723.574222 0 1.060545-.117187 1.458984-.351563.39844-.234376.747069-.54492 1.045899-.93164l.993164.773437c-.796879 1.224616-1.99218 1.836914-3.585937 1.836914zm-.202149-8.52539c-.656253 0-1.207029.238767-1.652344.716308-.445314.477542-.720702 1.146969-.826172 2.008301h4.763672v-.123047c-.046875-.826176-.269529-1.466306-.667968-1.92041-.39844-.454104-.937497-.681152-1.617188-.681152zm7.330078-1.160157.052735 1.195313c.726566-.914067 1.675775-1.371094 2.847656-1.371094 2.009775 0 3.023437 1.133778 3.041015 3.401367v6.28418h-1.625976v-6.292969c-.00586-.68555-.162596-1.192381-.470215-1.520508-.307619-.328126-.786618-.492187-1.437012-.492187-.527346 0-.990232.140624-1.388672.421875-.398439.281251-.708983.650388-.93164 1.107422v6.776367h-1.625977v-9.509766zm10.59961-2.302734v2.302734h1.77539v1.256836h-1.77539v5.897461c0 .380862.0791.666503.237304.856934.158204.19043.427733.285644.808594.285644.187501 0 .445311-.035156.773437-.105468v1.318359c-.427736.117188-.843747.175781-1.248046.175781-.726567 0-1.274413-.219724-1.643555-.659179-.369143-.439456-.553711-1.063473-.553711-1.872071v-5.897461h-1.731445v-1.256836h1.731445v-2.302734zm37.249023-106.8875-5.529622-10.2343832-30.870378 10.2343832h-8.9l24-42.8h6.8l14.929687 27.3072909 76.470313-25.9072909h6.3l-74.3 41.4zm6.849933-3.749695 49.050067-26.850305-53.950981 17.8862406zm-41.228753.0497208 27.369772-9.272574-11.090952-20.5274518zm-91.42118 96.5999742-1.4-3.8h-7.3l-1.4 3.8h-1.9l6.2-17h1.5l6.2 17zm-5-14.4-3.2 9h6.3zm22.2 5.7v1.9c0 .7-.1 1.3-.2 1.9s-.3 1.2-.5 1.8-.6 1.1-1 1.5c-.5.5-1.1.9-1.9 1.2-.7.3-1.5.4-2.4.4h-5.8v-17h5.8c.9 0 1.7.1 2.4.4s1.4.7 1.9 1.2c.4.4.8.9 1 1.5.2.5.4 1.1.5 1.7s.1 1.2.2 1.8zm-1.9 0c0-.5 0-1 0-1.6s0-1-.1-1.5-.2-.9-.3-1.3c-.2-.4-.4-.8-.7-1.1-.4-.5-.9-.8-1.5-1s-1.2-.3-1.8-.3h-3.7v13.8h3.7c.7 0 1.3-.1 1.8-.3.6-.2 1.1-.5 1.5-1 .3-.3.5-.7.7-1.1.2-.5.3-.9.3-1.5s.1-1.1.1-1.6 0-1 0-1.5zm11 8.7h-1.5l-5.6-17h1.9l4.4 13.7 4.4-13.7h1.9zm10.2 0v-17h1.8v17zm18.3-4.7c0 .7-.1 1.4-.4 2s-.7 1.1-1.2 1.5-1.1.7-1.9 1c-.7.2-1.5.3-2.4.3-1.3 0-2.4-.2-3.3-.5s-1.8-.9-2.6-1.7l1.2-1.2c.7.7 1.4 1.2 2.1 1.5s1.5.4 2.5.4c1.2 0 2.2-.3 2.9-.8s1.1-1.3 1.1-2.3c0-.4-.1-.8-.2-1.2s-.3-.7-.6-.9-.6-.4-.8-.5c-.3-.1-.8-.2-1.4-.3l-2-.3c-1.4-.2-2.4-.7-3.1-1.3-.9-.8-1.3-1.8-1.3-3.2 0-.7.1-1.4.4-2s.6-1.1 1.1-1.5 1-.7 1.7-1c.7-.2 1.4-.3 2.3-.3 1.1 0 2 .1 2.8.4s1.5.8 2.3 1.4l-1.2 1.2c-.5-.5-1.1-.8-1.7-1.1-.6-.2-1.4-.4-2.3-.4-1.1 0-2 .3-2.6.9s-.9 1.3-.9 2.3c0 .9.3 1.5.8 2 .3.2.6.4 1 .6s.8.3 1.3.4l1.9.3c.4.1.8.1 1.1.2s.6.2.8.2.5.2.7.3.4.3.6.4c.9.6 1.3 1.8 1.3 3.2zm16.2-3.8v2.4c0 .7-.1 1.3-.2 1.8s-.3 1-.5 1.4-.5.8-.9 1.2c-.6.6-1.2 1-2 1.3-.7.3-1.5.5-2.4.5-1.7 0-3.2-.6-4.3-1.8-.4-.4-.7-.8-.9-1.2s-.4-.9-.5-1.4-.2-1.1-.2-1.8 0-1.5 0-2.4 0-1.7 0-2.4.1-1.3.2-1.8.3-1 .5-1.4.5-.8.9-1.2c1.2-1.2 2.6-1.8 4.3-1.8s3.2.6 4.3 1.8c.4.4.7.8.9 1.2s.4.9.5 1.4.2 1.1.2 1.8.1 1.5.1 2.4zm-1.8 0c0-.9 0-1.6 0-2.3 0-.6-.1-1.1-.2-1.6-.1-.4-.2-.8-.4-1.1s-.4-.6-.6-.9c-.4-.4-.8-.7-1.3-.9s-1.1-.3-1.6-.3-1.1.1-1.6.3-1 .5-1.3.9c-.3.3-.5.6-.6.9-.2.3-.3.7-.4 1.1s-.1.9-.2 1.6v2.3 2.3c0 .6.1 1.1.2 1.6.1.4.2.8.4 1.1l.6.9c.4.4.8.7 1.3.9s1.1.3 1.6.3 1.1-.1 1.6-.3 1-.5 1.3-.9c.3-.3.5-.6.6-.9s.3-.7.4-1.1.1-1 .2-1.6c0-.7 0-1.4 0-2.3zm16.3 8.5-3.9-7.5h-4.1v7.5h-1.8v-17h6.5c.7 0 1.4.1 2 .3s1.2.5 1.6.9.8.9 1 1.5.4 1.2.4 2c0 1.2-.3 2.3-1 3-.7.8-1.6 1.3-2.7 1.5l4 7.7h-2zm-.1-12.3c0-1-.3-1.8-.9-2.3s-1.4-.8-2.4-.8h-4.5v6.2h4.5c1 0 1.8-.3 2.4-.8s.9-1.2.9-2.3zm16.8 7.6c0 .7-.1 1.4-.4 2s-.7 1.1-1.2 1.5-1.1.7-1.9 1c-.7.2-1.5.3-2.4.3-1.3 0-2.4-.2-3.3-.5s-1.8-.9-2.6-1.7l1.2-1.2c.7.7 1.4 1.2 2.1 1.5s1.5.4 2.5.4c1.2 0 2.2-.3 2.9-.8s1.1-1.3 1.1-2.3c0-.4-.1-.8-.2-1.2s-.3-.7-.6-.9-.6-.4-.8-.5c-.3-.1-.8-.2-1.4-.3l-2-.3c-1.4-.2-2.4-.7-3.1-1.3-.9-.8-1.3-1.8-1.3-3.2 0-.7.1-1.4.4-2s.6-1.1 1.1-1.5 1-.7 1.7-1c.7-.2 1.4-.3 2.3-.3 1.1 0 2 .1 2.8.4s1.5.8 2.3 1.4l-1.2 1.2c-.5-.5-1.1-.8-1.7-1.1-.6-.2-1.4-.4-2.3-.4-1.1 0-2 .3-2.6.9s-.9 1.3-.9 2.3c0 .9.3 1.5.8 2 .3.2.6.4 1 .6s.8.3 1.3.4l1.9.3c.4.1.8.1 1.1.2s.6.2.8.2c.2.1.5.2.7.3s.4.3.6.4c.9.6 1.3 1.8 1.3 3.2zm-233.8-29.8c4.3 0 8.3-.4 11.5-3.4 1.8-1.7 2.6-4.5 2.6-8.8v-6h-14.4c-7.9 0-11.7 3.1-11.7 9.3 0 6.1 3.7 8.9 12 8.9zm1.1-43.1c12.2 0 18 5.5 18.1 15.2v31.9h-5.1v-4.5c-3.9 3.9-7.6 5.1-14 5.1-6.9 0-10.8-1.2-13.8-4.3-2.1-2.2-3.4-5.7-3.4-9.1 0-8.5 6.2-13.4 16.3-13.4h14.9v-5.1c-.1-7.4-3.6-11.3-13-11.3-6.5 0-9.9 1.6-12.7 5.8v.1l-3.7-3.2v-.1c3.9-5.4 8.9-7.1 16.4-7.1zm56.9.6h5v46.4h-5.1v-5.3c-3.4 3.9-7.9 5.9-13.5 5.9-5.2 0-9.3-1.6-12.3-4.4-3.1-2.9-4.9-7.4-4.9-12.9v-29.7h5.1v28.8c0 8.9 4.4 13.8 12.7 13.8s13-5.1 13-13.8zm32.9 22.7 15.7 23.7h-6.1l-12.3-19.3-12.3 19.3h-6.2l15.8-23.7-15.1-22.7h6.2l11.6 18.5 11.5-18.5h6.2zm49.7 1.6v.2h-14.4c-7.9 0-11.7 3.1-11.7 9.3 0 6.1 3.7 8.9 12 8.9 4.3 0 8.3-.4 11.5-3.6 1.8-1.7 2.6-4.5 2.6-8.8zm-13-24.9c12.2 0 18.1 5.5 18.1 15.2v31.9h-5.1v-4.5c-3.9 3.9-7.6 5.1-14 5.1-6.9 0-10.8-1.2-13.8-4.3-2.1-2.2-3.4-5.7-3.4-9.1 0-8.4 6.2-13.4 16.3-13.4h14.9v-5.1c0-7.4-3.6-11.3-13-11.3-6.5 0-9.9 1.6-12.7 5.8v.1l-3.7-3.2v-.1c3.9-5.4 8.9-7.1 16.4-7.1zm58.5 4.4c3.1 3 4.9 7.5 5 13.1v29.6h-5.1v-28.8c0-8.9-4.5-13.8-12.7-13.8-8.3 0-13 5.1-13 13.8v28.8h-5.1v-46.5h5.1v5.3c3.4-3.9 7.9-5.9 13.5-5.9 5.2 0 9.3 1.6 12.3 4.4zm30.5 38.8c3.8-.1 7.1-1.5 9.6-3.9 4-3.8 4.2-10.1 4.2-15.4s-.4-11.6-4.2-15.4c-2.5-2.5-5.9-3.9-9.6-3.9-3.8 0-7.1 1.4-9.6 3.9-4 3.8-4.2 10.1-4.2 15.4s.4 11.6 4.2 15.4c2.5 2.5 5.9 3.9 9.6 3.9zm12.9-38.1c5 4.9 5.8 12.1 5.8 18.7s-.8 13.8-5.8 18.7c-3.3 3.3-7.7 5.1-12.9 5.1s-9.6-1.8-12.9-5.1c-5-4.9-5.8-12.1-5.8-18.7s.8-13.7 5.8-18.7c3.3-3.3 7.7-5.1 12.9-5.1s9.6 1.8 12.9 5.1zm7.12 1.29c-.006126-.5841454.109674-1.1631452.34-1.7.44774-1.0244228 1.276026-1.8347811 2.31-2.26 1.600458-.671238 3.447682-.3120555 4.68.91.394089.3858737.70988.8442807.93 1.35.225728.5382737.341336 1.1163135.34 1.7.002387.590259-.11321 1.1750434-.34 1.72-.222385.5103733-.537747.9749382-.93 1.37-.386718.3902109-.849672.6965774-1.36.9-1.065629.4262169-2.254371.4262169-3.32 0-.515903-.2040276-.985287-.5101472-1.38-.9-.392253-.3950618-.707615-.8596267-.93-1.37-.231367-.543557-.347152-1.129294-.34-1.72zm.78 0c-.003345.5017253.084761.9998611.26 1.47.173225.4312226.42786.8250581.75 1.16.648955.6806603 1.549562 1.0640512 2.49 1.06.474758.0067246.945407-.0887693 1.38-.28.42052-.184664.800964-.4496154 1.12-.78.319151-.335338.570432-.729238.74-1.16.183443-.4681492.275109-.9672186.27-1.47.005032-.4930378-.0867-.9822745-.27-1.44-.333552-.8683543-1.004555-1.5646097-1.86-1.93-.434593-.1912307-.905242-.2867246-1.38-.28-.481141-.0058992-.958139.0895005-1.4.28-.421486.1784272-.802475.4403574-1.12.77-.324368.3331709-.579304.7274718-.75 1.16-.164253.4618522-.242215.9499619-.23 1.44zm1.86-2.5h1.93c.46864-.0389151.936006.0885483 1.32.36.306606.2713596.466183.6721597.43 1.08.036567.3724389-.099822.741057-.37 1-.266721.2204508-.595009.3531629-.94.38l1.43 2.19h-.84l-1.32-2.14h-.82v2.14h-.78zm.78 2.23h1.31c.143439-.016736.284409-.0503003.42-.1.115936-.0579448.215606-.1438668.29-.25.079758-.1433514.117858-.3061429.11-.47.004162-.1400007-.030445-.2784286-.1-.4-.062533-.0965825-.14855-.1757185-.25-.23-.11387-.054346-.235202-.0914198-.36-.11h-.39-1z"
      fill="#fff"
    />
  </svg>
);

function CoverSheet({ siteData }) {
  const _slideCover = () => {
    smoothscroll.polyfill();
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <section
      className={`container--fluid ${styles.coverSheet}`}
      onClick={() => _slideCover()}
    >
      <div className="container">
        <div className={`col-xs-12 ${styles.coverSheetContent}`}>
          <div className={styles.logoContainer}>
            <AuxanoLogoWhite
              alt="Auxano Advisors"
              height="208.66"
              width="450"
              className={styles.logo}
            />
          </div>
          <div className={styles.text}>
            <h1>{siteData.coverSheet.hero}</h1>
          </div>
          <button
            aria-label="click to scroll to content"
            onClick={() => _slideCover()}
            className={styles.scrollButton}
          >
            <DownArrow className={styles.arrow} height="22" width="17" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CoverSheet;