exports.getcontact = (req, res, next) => {
    res.render('contact-us', {
      pageTitle: 'contact-us',
      path: '/contact-us',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };