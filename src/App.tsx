import "./App.scss";
import Card from "./components/ui/Card/Card";
import Header from "./components/Header/Header";
import HeroPage from "./components/HeroPage/HeroPage";
import DefaultButton from "./components/ui/DefaultButton/DefaultButton";

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
        <HeroPage />

        {/* <div className="introduction">
          <div className="introduction__header">
            <Header />
          </div>
          <div className="introduction__main">
            <div className="introduction__styled-heading"></div>
            <div className="introduction__styled-heading"></div>
            <div className="introduction__styled-heading"></div>
          </div>
          <div className="introduction__footer">
            <div className="introduction__text">Давайте обсудим ваш проект</div>
            <div className="introduction__button">
              <DefaultButton text="Начать проект" />
            </div>
          </div>
        </div> */}

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
          <div className="why-us__grid-container">
            <div className="why-us__card">
              <Card title="Почему мы" />
            </div>
            <div className="why-us__card-column">
              {cards.map(({ title, subtitle, text }) => {
                const style: React.CSSProperties = { width: "340px" };
                return (
                  <div className="why-us__item">
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
            <div className="why-us__text-container">
              <div className="why-us__text">Признайте успех,</div>
              <div className="why-us__text">- стремитесь к большему.</div>
            </div>
            <div className="why-us__button">
              <DefaultButton text="Начать проект" />
            </div>
          </div>
        </div>

        <div className="services">
          <div className="services__card">
            <Card title="Услуги" template="yellow" />
          </div>
          <div className="services__text-container">
            <div className="services__text">- Важно не то,</div>
            <div className="services__text">что мы делаем,</div>
            <div className="services__text">а ваше удовлетворение</div>
          </div>
          <div className="services__cards">
            <div className="services__card">
              <Card title="services" />
            </div>
            <div className="services__card">
              <Card title="services" />
            </div>
            <div className="services__card">
              <Card title="services" />
            </div>
            <div className="services__card">
              <Card title="services" />
            </div>
          </div>
          <div className="services__button">
            <DefaultButton text="Начать проект" />
          </div>
        </div>

        <div className="our-work">
          <div className="our-work__card">
            <Card title="Наши работы" />
          </div>
          <div className="our-work__row">
            <div className="our-work__work-item">
              <Card title="work" template="work" />
            </div>
            <div className="our-work__work-item">
              <Card title="work" template="work" />
            </div>
            <div className="our-work__work-item">
              <Card title="work" template="work" />
            </div>
          </div>
          <DefaultButton text="Начать проект" />
        </div>

        <div className="end-section">
          <div className="end-section__header">
            <div className="end-section__item">Давайте</div>
            <div className="end-section__item">работать</div>
            <div className="end-section__item">Вместе</div>
          </div>
          <div className="end-section__center">
            <div className="end-section__button">
              <DefaultButton text="Начать проект" />
            </div>
            <div className="end-section__contacts">
              <Card title="Контакты" />
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
