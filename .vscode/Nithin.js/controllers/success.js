exports.getsuccess = (req, res, next) => {
    res.render('success', {
      pageTitle: 'success',
      path: '/success',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };