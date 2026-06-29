import {
  Html, Head, Preview, Body, Container,
  Section, Row, Column, Text, Link, Hr,
  Font, Img,
} from '@react-email/components';
import { CircleCheckBig, ArrowRight, Globe, SquareTerminal, MapPin } from 'lucide-react';

// ── Font stacks ──────────────────────────────────────────────────────────
const fontInter     = '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif';
const fontJetBrains = '"JetBrains Mono", "Fira Code", "Courier New", monospace';
const fontGesturaH  = '"Gestura Headline Text", "Gestura Headline", Georgia, serif';
const fontGesturaT  = '"Gestura Text", "Gestura", Georgia, serif';

// ── Styles inline (compatible tous clients email) ─────────────────────────
const styles = {
  body: {
    backgroundColor: '#080c18',
    margin: '0',
    padding: '0',
    fontFamily: fontInter,
  },
  outerPad: {
    backgroundImage: 'url("https://raw.githubusercontent.com/cyberzoneAcademy/cyberzone-email-template/main/assets/bg.png")',
    backgroundSize: '100% auto',
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    padding: '28px 16px 40px',
  },
  card: {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: '#101E32',
    borderRadius: '18px',
    overflow: 'hidden',
  },

  // Logo
  logoBar: {
    textAlign: 'center',
    padding: '16px 30px 20px',
  },
  logoText: {
    fontSize: '15px',
    letterSpacing: '3px',
    color: '#ffffff',
    fontWeight: '700',
    fontFamily: fontJetBrains,
  },
  logoCyan: { color: '#00d4ff' },

  // Hero
  hero: {
    background: '#2EFFFF33',
    padding: '44px 40px 36px',
    textAlign: 'center',
  },
  heroTitle: {
    margin: '0',
    fontSize: '16px',
    color: '#ffffff',
    textTransform: 'uppercase',
    lineHeight: '24px',
    fontFamily: fontJetBrains,
  },

  // Body
  bodyPad: {
    padding: '32px 40px 0',
    backgroundColor: '#0d1528',
  },
  greeting: {
    fontSize: '14px',
    color: '#FFFFFFB2',
    margin: '0 0 14px',
    fontFamily: fontInter,
  },
  para: {
    fontSize: '14px',
    color: '#FFFFFFB2',
    margin: '0 0 26px',
    fontFamily: fontInter,
  },

  // CTA
  ctaWrap: { width: 'full', padding: '0 0 26px' },
  ctaBtn: {
    display: 'block',
    width: '100%',
    backgroundColor: '#2EFFFF',
    color: '#000000',
    fontSize: '14px',
    fontWeight: '600',
    padding: '14px 0',
    borderRadius: '30px',
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: fontInter,
  },

  // Amount box
  amountBoxOuter: {
    background: 'linear-gradient(90deg, #6D3BD7 0%, #4CD7F6 100%)',
    borderRadius: '12px',
    padding: '1.5px',
    marginBottom: '30px',
  },
  amountBox: {
    backgroundColor: '#0f1a2e',
    borderRadius: '11px',
    padding: '20px 26px',
  },
  amountLabel: {
    fontSize: '12px', letterSpacing: '1px', color: '#958EA0',
    textTransform: 'uppercase', margin: '0 0 4px',
    fontFamily: fontGesturaT,
  },
  amountMotif: {
    fontSize: '14px', color: '#2EFFFFCC', margin: '0',
    fontFamily: fontInter, fontWeight: '600',
  },
  amountNum: {
    fontSize: '48px', fontWeight: '800', color: '#FCA100',
    margin: '0', textAlign: 'right',
    fontFamily: fontInter,
  },
  amountCurrency: { fontSize: '14px', verticalAlign: 'super' },

  // Section title
  sectionTitle: {
    borderLeft: '3px solid #2EFFFF',
    paddingLeft: '14px',
    marginBottom: '16px',
  },
  sectionTitleText: {
    margin: '0', fontSize: '16px', letterSpacing: '1px',
    color: '#ffffff', textTransform: 'uppercase',
    fontFamily: fontGesturaH,
  },

  // Detail row
  detailRow: {
    borderBottom: '1px solid #1a2540',
  },
  detailLabel: {
    fontSize: '14px', color: '#ffffff', fontWeight: '700',
    fontFamily: fontInter,
    whiteSpace: 'nowrap', padding: '8px 0', margin: '0',
  },
  detailValue: {
    fontSize: '14px', color: '#FFFFFFB2',
    fontFamily: fontInter,
    textAlign: 'right', padding: '8px 0', margin: '0',
  },
  detailValueCyan: {
    fontSize: '14px', color: '#2EFFFF', fontWeight: '400',
    fontFamily: fontInter,
    textAlign: 'right', padding: '8px 0', margin: '0',
  },

  // Steps
  stepTitle: {
    margin: '0 0 4px', fontSize: '14px',
    color: '#ffffff', fontWeight: '700',
    fontFamily: fontInter,
  },
  stepDesc: {
    margin: '0', fontSize: '14px', color: '#FFFFFFB2',
    fontFamily: fontInter,
  },

  // Quote
  quoteBox: {
    borderTop: '1px solid #49445433',
    padding: '20px 0 32px',
  },
  quoteText: {
    margin: '0', fontSize: '14px', color: '#4CCD99B2',
    fontFamily: '"Cascadia Mono", "Fira Code", "JetBrains Mono", monospace',
  },

  // Map
  mapWrap: {
    position: 'relative',
    height: '320px',
    overflow: 'hidden',
  },
  mapImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.6',
    filter: 'grayscale(0.5)',
  },
  locationCardWrap: {
    position: 'absolute',
    top: '0', left: '0', right: '0', bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationCard: {
    backgroundColor: '#141414B2',
    borderRadius: '16px',
    padding: '28px 32px',
    textAlign: 'center',
    width: '280px',
  },
  locationTitle: {
    margin: '0 0 10px', fontSize: '18px', fontWeight: '600',
    color: '#2EFFFF',
    fontFamily: fontGesturaT,
  },
  locationInfo: {
    margin: '0 0 4px', fontSize: '14px', color: '#CDD0D3B2',
    fontFamily: fontInter,
  },
  mapsLink: {
    fontSize: '14px', color: '#FCA100',
    textDecoration: 'underline', fontWeight: '500',
    fontFamily: fontInter,
    marginTop: '6px',
  },

  // Social bar (inside card)
  socialBar: {
    backgroundColor: '#101E32',
    padding: '22px 30px',
    textAlign: 'center',
  },

  // Footer
  footer: {
    padding: '28px 30px 10px',
    textAlign: 'center',
  },
  footerLegal: {
    margin: '12px 0 0', fontSize: '10px', color: '#2a3d50',
    fontFamily: fontInter,
  },
};

// ── Composant principal ───────────────────────────────────────────────────
export default function CyberZoneEmail({
  prenom        = 'Micheal',
  montant       = '50.000',
  motif         = 'Inscription Initiale',
  reference     = 'U0DS-01PE',
  formation     = 'Formation CCP – Présentielle CyberZone',
  lieuSession   = 'Centre CyberZone – OCT 2026',
  methode       = 'Orange Money',
  date          = '17-06-26',
  statut        = 'COMPLÉTÉ',
  lienRecu      = '#',
  lienDesabonnement = '#',
}) {
  return (
    <Html lang="fr">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2',
            format: 'woff2',
          }}
        />
        <Font
          fontFamily="JetBrains Mono"
          fallbackFontFamily="Courier"
          webFont={{
            url: 'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2',
            format: 'woff2',
          }}
        />
      </Head>

      <Preview>Accès Autorisé : Paiement Validé – CyberZone</Preview>

      <Body style={styles.body}>
        <Section style={styles.outerPad}>

          {/* ── 1. LOGO  ──────── */}
          <Section style={styles.logoBar}>
            <Img
              src="https://raw.githubusercontent.com/cyberzoneAcademy/cyberzone-email-template/main/assets/logo.png"
              alt="CyberZone"
              width="160"
              height="auto"
              style={{ margin: '0 auto', display: 'block' }}
            />
          </Section>

          <Container style={styles.card}>

            {/* ── 2. HERO ─────────────────────────────── */}
            <Section style={styles.hero}>
              <Section style={{ textAlign: 'center', marginBottom: '22px' }}>
                <Img
                  src="https://raw.githubusercontent.com/cyberzoneAcademy/cyberzone-email-template/main/assets/icon1.png"
                  alt="Bouclier CyberZone"
                  width="100"
                  height="100"
                  style={{ margin: '0 auto', display: 'block' }}
                />
              </Section>
              <Text style={styles.heroTitle}>
                ACCÈS AUTORISÉ : PAIEMENT VALIDÉ
              </Text>
            </Section>

            {/* ── 3. BODY ─────────────────────────────── */}
            <Section style={styles.bodyPad}>

              <Text style={styles.greeting}>Bonjour {prenom} !</Text>

              <Text style={styles.para}>
                Félicitations. Votre transaction a été traitée avec succès et votre accès
                au réseau est officiellement autorisé. En rejoignant CyberZone, vous ne
                suivez pas simplement une formation : vous intégrez un parcours d'excellence
                destiné à ceux qui ambitionnent de devenir des références dans le domaine de
                la cybersécurité. Vous êtes sur le point de plonger dans un programme intensif
                axé sur la pratique, où vous allez apprendre, hacker, protéger et collaborer
                au sein d'une communauté restreinte de passionnés.
              </Text>

              {/* CTA */}
              <Section style={styles.ctaWrap}>
                <Link href={lienRecu} style={styles.ctaBtn}>
                  Télécharger le reçu →
                </Link>
              </Section>

              <Text style={styles.para}>
                Préparez-vous à développer des compétences recherchées à l'échelle mondiale,
                à maîtriser l'art du test d'intrusion et à relever le défi ultime de la
                certification CCP. L'élite vous attend. Votre initiation commence maintenant!
              </Text>

              {/* IA Card */}
              <Section
                style={{
                  backgroundColor: '#111c30', border: '1px solid #1e3454',
                  borderRadius: '12px', padding: '32px 20px',
                  textAlign: 'center', marginBottom: '26px',
                }}
              >
                <Img
                  src="https://raw.githubusercontent.com/cyberzoneAcademy/cyberzone-email-template/main/assets/lion.png"
                  alt="Lion IA CyberZone"
                  width="450px"
                  height="300px"
                  style={{ margin: '0 auto', display: 'block' }}
                />
              </Section>

              {/* Montant */}
              <div style={styles.amountBoxOuter}>
                <Section style={styles.amountBox}>
                  <Row>
                    <Column style={{ verticalAlign: 'middle' }}>
                      <Text style={styles.amountLabel}>MONTANT RÉGLÉ</Text>
                      <Text style={styles.amountMotif}>Motif: {motif}</Text>
                    </Column>
                    <Column style={{ verticalAlign: 'middle', width: '50%' }}>
                      <Text style={styles.amountNum}>
                        {montant} <span style={styles.amountCurrency}>XAF</span>
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </div>

              {/* Transaction details */}
              <Section style={{ marginBottom: '28px' }}>
                <div style={styles.sectionTitle}>
                  <Text style={styles.sectionTitleText}>DÉTAILS DE LA TRANSACTION</Text>
                </div>

                {[
                  { label: 'Référence',                     value: `CYB-TRF-${reference}` },
                  { label: 'Formation',                     value: formation },
                  { label: 'Lieu de formation Et Session',  value: lieuSession },
                  { label: 'Méthode',                       value: methode },
                  { label: 'Date',                          value: date },
                ].map(({ label, value }) => (
                  <Row key={label} style={styles.detailRow}>
                    <Column><Text style={styles.detailLabel}>{label}</Text></Column>
                    <Column><Text style={styles.detailValue}>{value}</Text></Column>
                  </Row>
                ))}

                <Row>
                  <Column><Text style={styles.detailLabel}>Statut</Text></Column>
                  <Column><Text style={styles.detailValueCyan}>{statut}</Text></Column>
                </Row>
              </Section>

              {/* Prochaines étapes */}
              <Section style={{ marginBottom: '28px' }}>
                <div style={styles.sectionTitle}>
                  <Text style={styles.sectionTitleText}>PROCHAINES ÉTAPES</Text>
                </div>

                {[
                  {
                    icon: <CircleCheckBig size={20} color="#2EFFFF" strokeWidth={1.5} />,
                    title: 'Vérification & Contact',
                    desc:  'Un membre de l\'équipe CyberZone prendra contact avec vous très prochainement pour vérifier votre candidature et répondre à vos éventuelles questions.',
                  },
                  {
                    icon: <ArrowRight size={20} color="#2EFFFF" strokeWidth={1.5} />,
                    title: 'Admission & Solde',
                    desc:  'Lors de cet échange, nous finaliserons votre admission et vous communiquerons les modalités exactes pour le paiement du solde de la formation (Tranches 1, 2 et solde final).',
                  },
                  {
                    icon: <Globe size={20} color="#2EFFFF" strokeWidth={1.5} />,
                    title: 'Logistique & Accès',
                    desc:  'Une fois votre admission validée, vos identifiants d\'accès au portail et les détails de votre session (Jour ou Soir) vous seront transmis via un canal sécurisé.',
                  },
                ].map(({ icon, title, desc }, i) => (
                  <Row key={i} style={{ marginBottom: '18px' }}>
                    <Column style={{ width: '30px', verticalAlign: 'top', paddingTop: '3px' }}>
                      {icon}
                    </Column>
                    <Column>
                      <Text style={styles.stepTitle}>{title}</Text>
                      <Text style={styles.stepDesc}>{desc}</Text>
                    </Column>
                  </Row>
                ))}
              </Section>

              {/* Citation */}
              <Section style={styles.quoteBox}>
                <Row>
                  <Column style={{ width: '32px', verticalAlign: 'top', paddingTop: '2px' }}>
                    <SquareTerminal size={20} color="#4CCD99B2" strokeWidth={2} />
                  </Column>
                  <Column>
                    <Text style={styles.quoteText}>
                      "Merci de votre confiance. Préparez-vous à décomposer les problèmes..."
                    </Text>
                  </Column>
                </Row>
              </Section>

            </Section>{/* /bodyPad */}

            {/* ── 4. MAP ────────────────── */}
            <div style={styles.mapWrap}>
              <Img
                src="https://raw.githubusercontent.com/cyberzoneAcademy/cyberzone-email-template/main/assets/map-douala.png"
                alt="Carte Douala"
                style={styles.mapImg}
                width="600"
                height="320"
              />
              <div style={styles.locationCardWrap}>
                <div style={styles.locationCard}>
                  <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                    <MapPin size={40} color="#2EFFFF" strokeWidth={1.5} />
                  </div>
                  <Text style={styles.locationTitle}>Quartier Général</Text>
                  <Text style={styles.locationInfo}>+237 672 000 509</Text>
                  <Text style={styles.locationInfo}>contact@cyberzone-sec.com</Text>
                  <Text style={{ ...styles.locationInfo, marginBottom: '14px' }}>
                    1888 Terminus Akwa Nord, Douala
                  </Text>
                  <Link
                    href="https://maps.google.com/?q=1888+Terminus+Akwa+Nord+Douala"
                    style={styles.mapsLink}
                  >
                    Ouvrir dans Google Maps
                  </Link>
                </div>
              </div>
            </div>

            {/* ── 5. ICÔNES SOCIALES (dans la carte) ──── */}
            <Section style={styles.socialBar}>
              <Row>
                {[
                  { href: '#', label: 'Facebook',  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.95c5.05-.5 9-4.76 9-9.95z"/></svg> },
                  { href: '#', label: 'WhatsApp',  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.23C8.69 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.03 17.5c-1.4 0-2.77-.37-3.97-1.08l-.28-.17-2.93.77.78-2.86-.18-.29A7.45 7.45 0 014.5 12c0-4.14 3.36-7.5 7.5-7.5S19.5 7.86 19.5 12s-3.36 7.5-7.47 7.5zm4.14-5.62c-.23-.11-1.33-.66-1.54-.73-.21-.08-.36-.11-.51.11-.15.23-.59.73-.72.88-.13.15-.27.17-.49.06-.23-.11-.96-.35-1.83-1.13-.68-.6-1.13-1.35-1.27-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.11-.51-1.23-.7-1.69-.18-.44-.37-.38-.51-.39h-.44c-.15 0-.4.06-.6.28-.21.23-.79.77-.79 1.88s.81 2.18.92 2.33c.11.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.44-.07 1.33-.55 1.52-1.07.19-.53.19-.98.13-1.07-.06-.1-.21-.15-.44-.27z"/></svg> },
                  { href: '#', label: 'LinkedIn',  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg> },
                  { href: '#', label: 'Instagram', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z"/></svg> },
                  { href: '#', label: 'X',         icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                ].map(({ href, label, icon }) => (
                  <Column key={label} style={{ textAlign: 'center', padding: '0 8px' }}>
                    <Link href={href} style={{ textDecoration: 'none' }}>
                      {icon}
                    </Link>
                  </Column>
                ))}
              </Row>
            </Section>

          </Container>

          {/* ── Legal (hors carte) ────────────────────── */}
          {/* <Text style={styles.footerLegal}>
            © 2026 CyberZone · 1888 Terminus Akwa Nord, Douala ·{' '}
            <Link href={lienDesabonnement} style={{ color: '#2a3d50' }}>
              Se désabonner
            </Link>
          </Text> */}

        </Section>
      </Body>
    </Html>
  );
}

// import { render } from '@react-email/render';
// export const emailHtml = render(<CyberZoneEmail />, { pretty: true });
