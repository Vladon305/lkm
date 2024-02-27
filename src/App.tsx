import "./App.scss";
import { Card, DefaultButton } from "./components/ui";
import Header from "./components/Header/Header";
import {
  ThunderLeft,
  ThunderRight,
  classicWhiteAngle,
  Site,
  Robot,
  Cube,
  Abstract,
} from "./assets";
import { workImage1, workImage2, workImage3 } from "./assets/workImages";

function App() {
  const cards = [
    {
      title: "Скорость",
      subtitle: "Мы скорость",
      text: "Мы выполняем все быстро! Очень быстро мы выполняем, ну прям очень быстро!",
    },
    {
      title: "Безопасность",
      subtitle: "Мы безопасность",
      text: "Мы выполняем все безопасно! Очень безопасно выполняем.",
    },
    {
      title: "Надежность",
      subtitle: "Мы надежность",
      text: "Мы выполняем все надежно! Очень надежно выполняем!",
    },
    {
      title: "Поддержка",
      subtitle: "Хорошая поддержка",
      text: "Лучшая поддержка вашего проекта!",
    },
  ];

  return (
    <div className="page">
      <div className="container">
        {/* <HeroPage /> */}

        <div className="introduction">
          <div className="introduction__header">
            <Header />
          </div>
          <div className="introduction__main">
            <div className="introduction__styled-heading">
              <div className="introduction__text introduction__realization">
                воплощение
              </div>
            </div>
            <div className="introduction__styled-heading">
              <div className="introduction__styled-heading_yours">
                <div className="thunder">
                  <img
                    src={ThunderLeft}
                    alt="thunder left"
                    className="thunder__image thunder__image_left"
                  />
                </div>
                <div className="introduction__text introduction__text_yours text-green">
                  <div>ваших</div>
                </div>
                <div className="thunder">
                  <img
                    src={ThunderRight}
                    alt="thunder right"
                    className="thunder__image thunder__image_right"
                  />
                </div>
              </div>
            </div>
            <div className="introduction__styled-heading">
              <div className="introduction__text introduction__text_ideas text-yellow">
                идей
              </div>
            </div>
          </div>
          <div className="introduction__footer">
            <div className="introduction__text introduction__text_offer">
              Давайте обсудим ваш проект
            </div>
            <div className="introduction__button">
              <DefaultButton text="Начать проект" />
            </div>
          </div>
        </div>

        {/* <div className="why_us_grid">
          <div className="col-span-2">
            <div>
              <Card title="Почему мы" />
            </div>
          </div>
          <div className="row-span-5">
            {cards.map(({ title, subtitle, text }) => {
              const style: React.CSSProperties = { width: "340px" };
              return (
                <div className="card__container">
                  <Card
                    key={title}
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    style={style}
                  />
                </div>
              );
            })}
          </div>
          <div className="row-start-4">
            <Card title="Почему мы" />
          </div>
          <div className="row-start-3">
            <Card title="Почему мы" />
          </div>
        </div> */}

        <div className="why-us">
          <div className="why-us__container">
            <div className="why-us__left-content">
              <div className="why-us__card">
                <Card
                  title="Почему мы"
                  template="yellow"
                  style={{ transform: "rotate(4deg)" }}
                  isScribble
                />
              </div>
              <div className="why-us__text-container">
                <div className="why-us__text">Признайте успех,</div>
                <div className="why-us__text">- стремитесь к большему.</div>
              </div>
              <div className="why-us__button">
                <DefaultButton text="Начать проект" />
              </div>
            </div>
            <div className="why-us__card-column">
              {cards.map(({ title, subtitle, text }) => {
                const style: React.CSSProperties = { width: "340px" };
                return (
                  <div className="why-us__item" key={title}>
                    <Card
                      key={title}
                      title={title}
                      subtitle={subtitle}
                      text={text}
                      style={style}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="services">
          <div className="services__card">
            <Card
              title="Услуги"
              template="yellow"
              style={{ transform: "rotate(-6deg)" }}
              angleSettings={{ src: classicWhiteAngle }}
              isScribble
            />
          </div>
          <div className="services__text-container">
            <div className="services__text">- Важно не то,</div>
            <div className="services__text">что мы делаем,</div>
            <div className="services__text">а ваше удовлетворение</div>
          </div>
          <div className="services__cards">
            <div className="services__service-card">
              <Card title="Сайты" template="service" icon={Site} />
            </div>
            <div className="services__service-card">
              <Card title="Боты" template="service" icon={Robot} />
            </div>
            <div className="services__service-card">
              <Card
                title="Интеграция готовых"
                text="решений"
                template="service"
                icon={Abstract}
              />
            </div>
            <div className="services__service-card">
              <Card title="Разработка ПО" template="service" />
            </div>
          </div>
          <div className="services__button">
            <DefaultButton text="Начать проект" />
          </div>
        </div>

        <div className="our-work">
          <div className="our-work__card">
            <Card
              title="Наши работы"
              template="yellow"
              style={{ transform: "rotate(4deg)" }}
              isScribble
            />
          </div>
          <div className="our-work__row">
            <div className="our-work__work-item">
              <Card
                text="Сайт сантех.рф - Лендинг конструктор для магазина сантехники."
                template="work"
                icon={Site}
                workImage={workImage1}
                style={{ width: 355, transform: "rotate(-7deg)" }}
              />
            </div>
            <div className="our-work__work-item">
              <Card
                text="@CryptoBot - бот для обмена криптовалютой."
                template="work"
                icon={Robot}
                workImage={workImage2}
                style={{ width: 355, transform: "rotate(4deg)", marginTop: 60 }}
              />
            </div>
            <div className="our-work__work-item">
              <Card
                text="ПО для заводов “Сигареты и табак”, автоматизация станков."
                template="work"
                icon={Cube}
                workImage={workImage3}
                style={{
                  width: 355,
                  transform: "rotate(-3deg)",
                  alignItems: "end",
                }}
              />
            </div>
          </div>
          <div className="our-work__button">
            <DefaultButton text="Начать проект" />
          </div>
        </div>

        <div className="end-section">
          <div className="end-section__header">
            <div className="end-section__styled-heading">
              <div className="end-section__item text-white end-section__come-on">
                Давайте
              </div>
            </div>
            <div className="end-section__styled-heading">
              <div className="end-section__item text-green end-section__work">
                работать
              </div>
            </div>
            <div className="end-section__styled-heading">
              <div className="end-section__item text-yellow end-section__together">
                Вместе
              </div>
            </div>
          </div>
          <div className="end-section__center">
            <div className="end-section__button">
              <DefaultButton text="Начать проект" />
            </div>
            <div className="end-section__contacts">
              <Card
                title="Контакты"
                subtitle="Юр. адрес:  ул. Пушкина, д8, к23"
                text="Телефон: +7(999)666-66-66"
                template="contacts"
                style={{ width: 700 }}
              />
            </div>
          </div>
          <div className="end-section__footer">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
