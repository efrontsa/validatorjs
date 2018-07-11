module.exports = {
  accepted: 'يجب قبول :attribute',
  active_url: ':attribute لا يُمثّل رابطًا صحيحًا',
  after: 'يجب على :attribute أن يكون تاريخًا لاحقًا للتاريخ :date.',
  after_or_equal: ':attribute يجب أن يكون تاريخاً لاحقاً أو مطابقاً للتاريخ :date.',
  alpha: 'يجب أن لا يحتوي :attribute سوى على حروف',
  alpha_dash: 'يجب أن لا يحتوي :attribute سوى على حروف، أرقام ومطّات.',
  alpha_num: 'يجب أن يحتوي :attribute على حروفٍ وأرقامٍ فقط',
  before: 'يجب على :attribute أن يكون تاريخًا سابقًا للتاريخ :date.',
  before_or_equal: ':attribute يجب أن يكون تاريخا سابقا أو مطابقا للتاريخ :date',
  between: {
    numeric: 'يجب أن تكون قيمة :attribute بين :min و :max.',
    string: 'يجب أن يكون عدد حروف النّص :attribute بين :min و :max'
  },
  confirmed: 'حقل التأكيد غير مُطابق للحقل :attribute',
  date: ':attribute ليس تاريخًا صحيحًا',
  date_format: 'لا يتوافق :attribute مع الشكل :format.',
  different: 'يجب أن يكون الحقلان :attribute و :other مُختلفان',
  digits: 'يجب أن يحتوي :attribute على :digits رقمًا/أرقام',
  digits_between: 'يجب أن يحتوي :attribute بين :min و :max رقمًا/أرقام ',
  distinct: 'للحقل :attribute قيمة مُكرّرة.',
  email: 'يجب أن يكون :attribute عنوان بريد إلكتروني صحيح البُنية',
  'in': ':attribute غير موجود',
  in_array: ':attribute غير موجود في :other.',
  integer: 'يجب أن يكون :attribute عددًا صحيحًا',
  max: {
    numeric: 'يجب أن تكون قيمة :attribute مساوية أو أصغر من :max.',
    string: 'يجب أن لا يتجاوز طول النّص :attribute :max حروفٍ/حرفًا'
  },
  min: {
    numeric: 'يجب أن تكون قيمة :attribute مساوية أو أكبر من :min.',
    string: 'يجب أن يكون طول النص :attribute على الأقل :min حروفٍ/حرفًا'
  },
  not_in: ':attribute موجود',
  not_regex: 'صيغة :attribute غير صحيحة.',
  numeric: 'يجب على :attribute أن يكون رقمًا',
  present: 'يجب تقديم :attribute',
  regex: 'صيغة :attribute .غير صحيحة',
  required: ':attribute مطلوب.',
  required_if: ':attribute مطلوب في حال ما إذا كان :other يساوي :value.',
  required_unless: ':attribute مطلوب في حال ما لم يكن :other يساوي :values.',
  required_with: ':attribute مطلوب إذا توفّر :values.',
  required_with_all: ':attribute مطلوب إذا توفّر :values.',
  required_without: ':attribute مطلوب إذا لم يتوفّر :values.',
  required_without_all: ':attribute مطلوب إذا لم يتوفّر :values.',
  same: 'يجب أن يتطابق :attribute مع :other',
  size: {
    numeric: 'يجب أن تكون قيمة :attribute مساوية لـ :size',
    string: 'يجب أن يحتوي النص :attribute على :size حروفٍ/حرفًا بالضبط'
  },
  string: 'يجب أن يكون :attribute نصآ.',


  attributes: {
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    email: 'البريد الالكتروني',
    website: 'الموقع الالكتروني',
    firstname: 'الاسم الاول',
    lastname: 'الاسم الاخير',
    subject: 'الموضوع',
    city: 'المدينة',
    region: 'المنطقة',
    country: 'الدولة',
    street: 'الشارع',
    zipcode: 'الرمز البريدي',
    phone: 'رقم الهاتف',
    mobile: 'رقم الجوال'
  }
};
