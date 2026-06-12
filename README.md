# 🛒 AboElfadl Store

متجر إلكتروني كامل مبني بـ HTML/CSS/JS خالص — مستضاف على GitHub + Netlify.

---

## 🚀 خطوات الإعداد

### 1. رفع المشروع على GitHub
1. أنشئ Repository جديد على GitHub
2. ارفع جميع ملفات المشروع فيه

### 2. ربط Netlify
1. اذهب إلى [netlify.com](https://netlify.com)
2. اضغط **New site from Git**
3. اختر الـ Repository
4. اضبط **Publish directory** على: `/`
5. اضغط **Deploy**

### 3. تعديل config.js ✏️

افتح ملف `config.js` واملأ بياناتك:

```js
const GITHUB_CONFIG = {
  USERNAME: "اسم_مستخدم_GitHub",
  REPO:     "اسم_الـ_Repository",
  BRANCH:   "main",
  TOKEN:    "ghp_xxxxxxxxxxxxxxxxxxxx",
};
```

#### كيفية إنشاء GitHub Token:
1. اذهب إلى: https://github.com/settings/tokens/new
2. اكتب اسم للـ Token
3. اختر صلاحية **repo** ✅
4. اضغط **Generate token**
5. انسخ التوكن والصقه في `config.js`

> ⚠️ **تحذير:** لا تشارك التوكن مع أحد ولا ترفعه على repository عام

### 4. إعداد Cloudinary (اختياري — لرفع الصور)
1. أنشئ حساب على [cloudinary.com](https://cloudinary.com)
2. من **Settings → Upload → Upload Presets** أنشئ Preset جديد (Unsigned)
3. أضف البيانات في `config.js`:
```js
const CLOUDINARY_CONFIG = {
  CLOUD_NAME:    "اسم_الـ_Cloud",
  UPLOAD_PRESET: "اسم_الـ_Preset",
};
```

### 5. تغيير كلمة سر الأدمن
في `config.js`:
```js
const ADMIN_CONFIG = {
  USERNAME: "admin",
  PASSWORD: "كلمة_السر_الجديدة",
};
```

---

## 📁 هيكل الملفات

```
aboelfadl-store/
├── index.html       ← واجهة المتجر الرئيسية
├── product.html     ← صفحة تفاصيل المنتج
├── admin.html       ← لوحة تحكم الإدارة
├── products.json    ← قاعدة البيانات
├── config.js        ← إعدادات GitHub + Cloudinary
└── README.md
```

---

## ✨ المميزات

| الميزة | الوصف |
|---|---|
| 🛍️ متجر كامل | عرض المنتجات مع البحث والتصنيف |
| 📦 صفحة منتج | تفاصيل كاملة + منتجات مشابهة |
| 🛒 سلة مشتريات | إضافة/حذف + تأكيد الطلب |
| 📊 لوحة إحصائيات | إجمالي المنتجات/الطلبات/الإيرادات |
| ➕ إضافة منتج | مع رفع صورة Cloudinary |
| ✏️ تعديل/حذف | مباشر من لوحة التحكم |
| 🧾 إدارة الطلبات | عرض + تغيير الحالة |
| 🏷️ إدارة الأقسام | إضافة/حذف الأقسام |
| ⚡ تحديث تلقائي | GitHub API → Netlify Auto-deploy |

---

## ⚙️ آلية العمل

```
الأدمن يضيف منتج
       ↓
GitHub API تعدّل products.json
       ↓
Netlify يكتشف التغيير (30-60 ثانية)
       ↓
الموقع يتحدث تلقائيًا ✅
```

---

## 🔐 أمان التوكن

للمشاريع الإنتاجية الحقيقية، يُفضّل استخدام:
- **Netlify Functions** كـ Backend وسيط
- **Environment Variables** لحفظ التوكن بدلاً من `config.js`

---

© 2025 AboElfadl Media — جميع الحقوق محفوظة
