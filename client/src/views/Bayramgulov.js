import { Link as LinkScroll, Element } from "react-scroll";

import photo_1 from "../img/Байрамгулов/1.jpg";
import photo_2 from "../img/Байрамгулов/2.jpg";
import photo_3 from "../img/Байрамгулов/3.jpg";
import photo_4 from "../img/Байрамгулов/4.png";

import arrow_down from "../img/arrow-down.svg";

import { Link } from "react-router-dom";

import HeroesSection from "./components/HeroesSection"

const Bayramgulov = () => {
  return (
    <main className="heroes">
      <LinkScroll activeClass="active" to="scr2" spy={true} offset={0}>
        <Link to="/">
          <div className="heroes__back-to-main">
            <img src={arrow_down} alt="" />
          </div>
        </Link>
      </LinkScroll>

      <HeroesSection name="scr1" to="scr2">
        <h1 className="heroes__name">
          Байрамгу́лов Габдульма́н Хуснутди́нович
        </h1>

        <div className="heroes__section__content heroes__section__content--left">
          <img src={photo_1} alt="" />
          <p>
            Байрамгу́лов Габдульма́н Хуснутди́нович родился в 1906 году в
            деревне Иштуганово Юмагузинского района Республики Башкортостан.
            Окончил 4 класса деревенской школы, вступил в колхоз. В сентябре
            1941 года он получает повестку на службу в армии для защиты
            Родины от немецких захватчиков. В ноябре 1941 года в селе Алкино
            Габдульма́н Хуснутди́нович проходит подготовительные курсы
            молодого бойца. Затем в составе 112-ой Башкирской кавалерийской
            дивизии под командованием генерала Шаймуратова принимает участие
            в обороне Москвы.
          </p>
        </div>

      </HeroesSection>

      <HeroesSection name="scr2" to="scr3">
        <div className="heroes__section__content heroes__section__content--right">
          <img src={photo_2} alt="" />
          <p>
            [Минигали́ Минга́зович Шаймура́тов — советский военачальник,
            командир 112-й Башкирской кавалерийской дивизии во время Великой
            Отечественной войны. Генерал-майор. Герой Российской Федерации.]
            В марте 1943 года в штаб дивизии приходят документы на
            Габдульмана Хуснутдиновича о извещением о том, что он является
            сыном раскулаченного кулака. Служба НКВД направляют его для
            далнейшего прохождения службы в штрафной батальон в район города
            Калач Сталинградской области в подразделения под командованиеем
            маршала Константина Константиновича Рокоссовского. С первых дней
            в штрафном батальоне он участвует в обороне города - героя
            Сталинграда. В жестоких схватках с немецкими оккупантами мой
            прадед получает несколько ранений.
          </p>
        </div>

        <LinkScroll
          activeClass="active"
          to="scr3"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div className="heroes__arrow-down-box">
            <img src={arrow_down} alt="" className="heroes__arrow-down" />
          </div>
        </LinkScroll>
      </HeroesSection>

      
      <HeroesSection name="scr3" to="scr4">
        <div className="heroes__section__content heroes__section__content--left">
          <img src={photo_3} alt="" />
          <p>
            [Константи́н Константи́нович Рокоссо́вский— советский и польский
            военачальник, дважды Герой Советского Союза.] В январе 1943 года
            он принимает участие в разгроме 6 полевой армии врага и взятия в
            плен фельдмаршала Фридриха Паулюса. За боевые заслуги из
            штрафного батальона был переведен в роту охраны Константина
            Рокоссовского. Далее в составе армии Рокоссовского участвует во
            многих сражениях по разгрому фашистов. День Победы он встретил в
            Германии на реке Эльба совместно с американскими войсками.
            Габдульман Хуснутдинович воевал в подразделении, под
            непосредственным командованием маршала Рокоссовского, то есть
            боевой путь маршала Рокоссовского – это путь Габдульмана
          </p>
        </div>

        <LinkScroll
          activeClass="active"
          to="scr4"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div className="heroes__arrow-down-box">
            <img src={arrow_down} alt="" className="heroes__arrow-down" />
          </div>
        </LinkScroll>
      </HeroesSection>


      <HeroesSection name="scr4">
        <h2 className="medals__name">
          Габдульман Хуснутдинович <br />
          <span>был награжден медалями:</span>
        </h2>
        <div
          className="heroes__section__content heroes__section__content--right"
          style={{ alignItems: "center" }}
        >
          <img src={photo_4} alt="" style={{ maxWidth: "550px" }} />
          <p>
            «За оборону Москвы» <br />
            «За отвагу» <br />
            «За оборону Сталинграда» <br />
            «За оборону Кенигсберга» <br />
            «За боевые заслуги» <br />
            «За победу над Германией» <br />
          </p>
        </div>

        <div className="medals__text">
          Габдульман Хуснутдинович, ветеран войны, ветеран труда,
          заслуженный работник Урала, умер в августе 1982 года.
        </div>
      </HeroesSection>
    </main>
  );
};

export default Bayramgulov;