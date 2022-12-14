import Footer from '../../components/footer/Footer';
import HeaderNav from '../../components/headerNav/HeaderNav';
import './style/Contact.css';

function Contact() {
  return (
    <div className="body-Contact">

      <header className="box-bodyHeaderContact">
        <HeaderNav />
      </header>

      <main className="box-mainContact">

        <section className="box-sectionContact">
          Seré o FORM
        </section>

      </main>

      <footer className="box-bodyFooterContact">
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
