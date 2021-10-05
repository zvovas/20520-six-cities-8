function NotFound(): JSX.Element {
  return (
    <div className='page page--gray page--login'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href={'main.html'}>
                <img className='header__logo' src={'img/logo.svg'} alt='6 cities logo' width='81' height='41'/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>404<br/> This page doesn&apos;t exist.</h1>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <a className='locations__item-link' href='/#'>
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
