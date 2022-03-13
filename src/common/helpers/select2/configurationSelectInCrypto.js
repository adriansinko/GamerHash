const configurationSelectInCrypto = Object.freeze({
  width: "100%",
  minimumResultsForSearch: Infinity,
  templateResult: (data) => {
    // eslint-disable-next-line no-undef
    return $(
      `<div class="select-crypto__item select-crypto__item--result">\n` +
        `  <div class="select-crypto__left">\n` +
        `    <img class="select-crypto__icon" src="${data.image}" alt="Icon" />\n` +
        `    <p class="select-crypto__text select-crypto__text--semiBold select-crypto__text--black">\n` +
        `        ${data.text} \n` +
        `    </p>\n` +
        `  </div>\n` +
        `  <div class="select-crypto__right">\n` +
        `    <p class="select-crypto__text select-crypto__text--medium select-crypto__text--black">\n` +
        `      ${data.value}\n` +
        `    </p>\n` +
        `    <p class="select-crypto__text select-crypto__text--medium select-crypto__text--grey">\n` +
        `      ${data.price}\n` +
        `    </p>\n` +
        `   </div>\n` +
        `</div>`
    );
  },
  templateSelection: (data) => {
    // eslint-disable-next-line no-undef
    return $(
      `<div class="select-crypto__item select-crypto__item--selection">\n` +
        `  <div class="select-crypto__left">\n` +
        `    <img class="select-crypto__icon" src="${data.image}" alt="Icon" />\n` +
        `    <p class="select-crypto__text select-crypto__text--semiBold select-crypto__text--black">\n` +
        `        ${data.text} \n` +
        `    </p>\n` +
        `  </div>\n` +
        `  <div class="select-crypto__right">\n` +
        `    <p class="select-crypto__text select-crypto__text--medium select-crypto__text--black">\n` +
        `      ${data.value}\n` +
        `    </p>\n` +
        `    <p class="select-crypto__text select-crypto__text--medium select-crypto__text--grey">\n` +
        `      ${data.price}\n` +
        `    </p>\n` +
        `   </div>\n` +
        `</div>`
    );
  },
});

export default configurationSelectInCrypto;
