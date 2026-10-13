import fs from 'fs';

// Simple valid PDF-1.4 generator
function createCvPdf() {
  const contentStream = `
BT
/F1 22 Tf
50 780 Td
(ABDOU LAHAT DIOP) Tj
0 -26 Td
/F2 13 Tf
(Agent Marketing Digital & Entrepreneur - Fondateur Sama Pub Dakar) Tj
0 -20 Td
/F3 10 Tf
(Dakar, Senegal | Email: contact@samapub.com | Tel / WhatsApp: +221 78 534 88 88) Tj
0 -30 Td
/F1 14 Tf
(PROFIL PROFESSIONNEL) Tj
0 -18 Td
/F3 10 Tf
(Fondateur de Sama Pub a Dakar, agence de marketing digital specialisee dans la creation) Tj
0 -14 Td
(de videos publicitaires par IA et la gestion de campagnes Facebook Ads a haute performance.) Tj
0 -14 Td
(Plus de 100 clients accompagnes : commerces, restaurants, opticiens, immobilier, artisans.) Tj
0 -14 Td
(Conception de scripts et voix off bilingues en francais et wolof adaptes au marche ouest-africain.) Tj
0 -30 Td
/F1 14 Tf
(EXPERIENCES PROFESSIONNELLES) Tj
0 -18 Td
/F1 11 Tf
(Fondateur & Directeur Marketing Digital - Sama Pub (Dakar)) Tj
0 -14 Td
/F2 9 Tf
(2023 - Present) Tj
0 -14 Td
/F3 10 Tf
(- Direction strategique de l'agence et accompagnement de plus de 100 clients locaux.) Tj
0 -13 Td
(- Production de publicites video immersives grace a l'intelligence artificielle generative.) Tj
0 -13 Td
(- Gestion et optimisation des budgets publicitaires sur Meta Ads (Facebook & Instagram).) Tj
0 -20 Td
/F1 11 Tf
(Specialiste Creation Publicitaire IA & Motion - Freelance & Studio) Tj
0 -14 Td
/F2 9 Tf
(2022 - 2023) Tj
0 -14 Td
/F3 10 Tf
(- Conception de visuels, avatars IA et voix off synchronisees en francais et wolof.) Tj
0 -13 Td
(- Augmentation moyenne du taux de conversion et engagement des marques clientes.) Tj
0 -20 Td
/F1 11 Tf
(Media Buyer & Consultant Campagnes Ads - PME & E-commerce) Tj
0 -14 Td
/F2 9 Tf
(2021 - 2022) Tj
0 -14 Td
/F3 10 Tf
(- Ciblage d'audience qualifiee, A/B testing de formats publicitaires et pilotage du ROI.) Tj
0 -30 Td
/F1 14 Tf
(COMPETENCES CLES) Tj
0 -18 Td
/F3 10 Tf
(- IA Generative (Video, Image & Voix-off) : Midjourney, Runway, Kling, HeyGen, ElevenLabs) Tj
0 -14 Td
(- Campagnes Facebook & Meta Ads : Pixel Meta, CBO, Scaling, Retargeting avance) Tj
0 -14 Td
(- Montage Video Publicitaire & Motion : CapCut, Premiere Pro, formats viraux) Tj
0 -14 Td
(- Copywriting persuasif & Voix off bilingue (Francais & Wolof)) Tj
0 -14 Td
(- Strategie Digitale & Relation Client (+100 entreprises accompagnees avec succes)) Tj
0 -30 Td
/F1 14 Tf
(FORMATIONS & CERTIFICATIONS) Tj
0 -18 Td
/F3 10 Tf
(- Specialisation IA Generative & Prompt Engineering Applique (2023-2024)) Tj
0 -14 Td
(- Certification Meta Media Buying & Publicite Digitale (2022-2023)) Tj
0 -14 Td
(- Marketing Strategique & Communication Digitale (2020-2022)) Tj
ET
`;

  const streamBytes = Buffer.from(contentStream, 'utf-8');
  const streamLength = streamBytes.length;

  let offsets = [];
  let pdf = '%PDF-1.4\n';

  function addObj(content) {
    offsets.push(Buffer.byteLength(pdf, 'utf-8'));
    pdf += content + '\n';
  }

  // 1: Catalog
  addObj('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');

  // 2: Pages
  addObj('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');

  // 3: Page
  addObj(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>\nendobj`);

  // 4: F1 Bold
  addObj('4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj');

  // 5: F2 Oblique
  addObj('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj');

  // 6: F3 Regular
  addObj('6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');

  // 7: Contents
  addObj(`7 0 obj\n<< /Length ${streamLength} >>\nstream${contentStream}\nendstream\nendobj`);

  const xrefOffset = Buffer.byteLength(pdf, 'utf-8');
  pdf += 'xref\n';
  pdf += `0 ${offsets.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let offset of offsets) {
    pdf += String(offset).padStart(10, '0') + ' 00000 n \n';
  }
  pdf += 'trailer\n';
  pdf += `<< /Size ${offsets.length + 1} /Root 1 0 R >>\n`;
  pdf += 'startxref\n';
  pdf += `${xrefOffset}\n`;
  pdf += '%%EOF\n';

  fs.writeFileSync('./public/cv-abdou-lahat-diop.pdf', Buffer.from(pdf, 'utf-8'));
  console.log('PDF generated successfully at public/cv-abdou-lahat-diop.pdf');
}

createCvPdf();
