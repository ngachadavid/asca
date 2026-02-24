'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function BankDetailsSection() {
  const { t } = useTranslation();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t('bankDetails.title')}
          </h2>
          <p className="text-gray-700 text-lg">
            {t('bankDetails.subtitle')}
          </p>
        </div>

        {/* Bank Details Card */}
        <div className="relative">
          {/* Black shadow */}
          <div className="absolute top-2 left-2 w-full h-full bg-black"></div>

          {/* Main card */}
          <div className="relative bg-white border-2 border-black p-8 md:p-12">
            
            {/* Account Holder */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                {t('bankDetails.accountHolder')}
              </h3>
              <p className="text-lg text-black/90 font-semibold">
                ASCA Luxembourg
              </p>
            </div>

            {/* IBAN */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                {t('bankDetails.iban')}
              </h3>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-xl md:text-2xl font-bold text-[#3399FF] font-mono">
                  LU87 0020 2535 3713 8400
                </p>
                <button
                  onClick={() => copyToClipboard('LU87 0020 2535 3713 8400')}
                  className="ml-4 px-4 py-2 bg-[#3399FF] text-white font-semibold rounded hover:bg-blue-600 transition text-sm"
                >
                  {t('bankDetails.copy')}
                </button>
              </div>
            </div>

            {/* Bank Name */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                {t('bankDetails.bankName')}
              </h3>
              <p className="text-lg text-black/90">
                Banque Internationale à Luxembourg (BIL)
              </p>
            </div>

            {/* ASCA Address */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                {t('bankDetails.address')}
              </h3>
              <p className="text-lg text-black/80">
                21, Bënzelter Wee<br />
                L - 9742 Boxhorn<br />
                Commune: Wincrange<br />
                Luxembourg
              </p>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-blue-50 ">
              <p className="text-black/80 text-base">
                {t('bankDetails.note')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}