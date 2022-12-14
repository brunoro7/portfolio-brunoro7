import Footer from '../../components/footer/Footer';
import HeaderNav from '../../components/headerNav/HeaderNav';
import MainProjects from '../../components/mainProjects/MainProjects';
import './style/Projects.css';

function Projects() {
  return (
    <div className="body-Projects">

      <header className="box-bodyHeaderProjects">
        <HeaderNav />
      </header>

      <main className="box-mainProjects">

        <section className="box-sectionProjects">
          <MainProjects />
        </section>

      </main>

      <footer className="box-bodyFooterProjects">
        <Footer />
      </footer>
    </div>
  );
}

export default Projects;
