export const regexPhoneNumber = /^0[0-9]{9}$/;

export const regexPhoneNumber2 = /^0[0-9]{9}$|^0[0-9]{10}$/;
export const regexNumber = /^[0-9]*$/;
export const regexDecimal = /^(\d+(\.\d{1})?){0,1}$/;

// export const regexFullName = /^[a-zA-Z0-9_ÀÁÂÃÈÉẾÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]{1,20}$/; //  /^[^-_\[\]{}()*\+=?.,\\\/^$|#~!@%&:;"\'`<>]+$/;//
export const regexTitle = /^[^\\<>~`!@#$%\^&*+=\-\[\];{}|:<>()_"'/\?\u2000-\u3300\u00a9\u00ae\ud83c\ud000-\udfff\ud83d\ud000-\udfff\ud83e\ud000-\udfff]+$/;
export const regexAddress = /^[^\\<>~`!@#$%\^&*+=\[\];{}|:<>()_"'\?\u2000-\u3300\u00a9\u00ae\ud83c\ud000-\udfff\ud83d\ud000-\udfff\ud83e\ud000-\udfff]+$/;
//~`!@#$%^&*()_+=|\[]{}:;"'<>?
export const regexFullName = /^[a-zA-Z_ÀÁÂÃÈÉẾÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]{1,20}$/; //  /^[^-_\[\]{}()*\+=?.,\\\/^$|#~!@%&:;"\'`<>]+$/;//
export const regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,30}))$/;
export const regexPhoneOrEmail = /^(?:0[0-9]{9}|(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,30})))$/;
/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */

export const formatCurrency = (value, n, x, s, c, unit) => {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = value.toFixed(Math.max(0, ~~n));

  return (
    (c ? num.replace('.', c) : num).replace(
      new RegExp(re, 'g'),
      '$&' + (s || ','),
    ) + (unit || '')
  );
};

export const formatDefaultVND = (
  value,
  unit = 'Đ',
  decimal = '.',
  thousands = '.',
) => {
  try {
    const valueInt = parseInt(value);
    if (/^\d+$/.test(valueInt)) {
      return formatCurrency(valueInt, 0, 3, thousands, decimal, unit);
    }
    return '';
  } catch (error) {
    return '';
  }
};
