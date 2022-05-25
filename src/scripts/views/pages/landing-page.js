import pageRender from '../../utils/page-render';
import '../component/target-landing';

const LandingPage = {
  async render() {
    pageRender('landing');
    return `
      <target-landing></target-landing>
    `;
  },

  async afterRender() {
    console.log('Halaman Landing Page');
  },
};

export default LandingPage;
