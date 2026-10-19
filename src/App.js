import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { systems, earlier, skills } from './data';
import Avatar from './assets/avatar.jpg';

const GITHUB = 'https://github.com/rezahakimalzami03/';
const LINKEDIN = 'https://www.linkedin.com/in/reza-hakim-757784283/';

const Ext = ({ href, children, className = '' }) => (
  <a href={href} target='_blank' rel='noopener noreferrer' className={className}>{children}</a>
);

const Header = () => (
  <header className='sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur'>
    <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5'>
      <a href='#top' className='font-display text-lg font-extrabold'>Reza Hakim</a>
      <nav className='flex gap-5 text-sm font-medium sm:gap-8 sm:text-base'>
        <a href='#sistem' className='hover:text-teal'>Sistem</a>
        <a href='#pengalaman' className='hover:text-teal'>Pengalaman</a>
        <a href='#kontak' className='hover:text-teal'>Kontak</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id='top' className='mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24'>
    <div>
      <h1 className='font-display text-[40px] font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl'>
        Saya membangun sistem yang dipakai tim rumah sakit setiap hari.
      </h1>
      <p className='mt-6 max-w-xl text-lg leading-8 text-muted'>
        Web developer di RSU Amira Purwakarta. Saya mengerjakan portal rekrutmen, pencatatan troli emergency, dan aplikasi internal lainnya, dari database sampai tampilan.
      </p>
      <div className='mt-8 flex flex-wrap gap-3'>
        <a href='#sistem' className='btn btn-primary'>Lihat sistem yang saya bangun</a>
        <a href='#kontak' className='btn btn-ghost'>Hubungi saya</a>
      </div>
    </div>
    <div className='badge-in mx-auto w-full max-w-[300px]'>
      <div className='mx-auto mb-[-14px] h-7 w-14 rounded-t-full border-4 border-b-0 border-ink/70' aria-hidden='true' />
      <div className='overflow-hidden rounded-2xl border border-line bg-white shadow-lg'>
        <div className='bg-teal px-5 py-3 text-sm font-semibold text-white'>Tim IT · RSU Amira</div>
        <img src={Avatar} alt='Foto Reza Hakim' className='aspect-square w-full object-cover' />
        <div className='px-5 py-4'>
          <p className='font-display text-xl font-extrabold'>Reza Hakim</p>
          <p className='text-sm text-muted'>Web Developer</p>
        </div>
      </div>
    </div>
  </section>
);

const Systems = () => (
  <section id='sistem' className='border-t border-line bg-white'>
    <div className='mx-auto max-w-6xl px-5 py-16 lg:py-24'>
      <h2 className='font-display text-3xl font-extrabold sm:text-4xl'>Sistem yang berjalan di RSU Amira</h2>
      <p className='mt-3 max-w-xl text-muted'>Tiga aplikasi web yang sudah live dan dipakai oleh calon karyawan, HRD, dan petugas rumah sakit.</p>
      <div className='mt-10 divide-y divide-line border-y border-line'>
        {systems.map((s) => (
          <article key={s.name} className='grid gap-6 py-8 lg:grid-cols-[1fr_1.4fr_auto] lg:items-start'>
            <div>
              <h3 className='flex items-center gap-2 font-display text-2xl font-extrabold'>
                {s.emergency && <span className='h-2.5 w-2.5 rounded-full bg-signal' aria-hidden='true' />}
                {s.name}
              </h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                {s.stack.map((t) => <span key={t} className='tag'>{t}</span>)}
              </div>
            </div>
            <div>
              <p className='leading-7'>{s.what}</p>
              <ul className='mt-3 space-y-1 text-sm text-muted'>
                {s.facts.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <Ext href={s.url} className='btn btn-ghost w-full lg:w-auto'>Buka website</Ext>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id='pengalaman' className='mx-auto max-w-6xl px-5 py-16 lg:py-24'>
    <div className='grid gap-12 lg:grid-cols-2'>
      <div>
        <h2 className='font-display text-3xl font-extrabold sm:text-4xl'>Proyek sebelumnya</h2>
        <p className='mt-3 text-muted'>Mahasiswa Universitas Singaperbangsa Karawang dengan pengalaman magang sebagai web developer.</p>
        <ul className='mt-8 divide-y divide-line border-y border-line'>
          {earlier.map((p) => (
            <li key={p.name}>
              <Ext href={p.url} className='block py-4 hover:bg-white'>
                <p className='font-semibold'>{p.name}</p>
                <p className='text-sm text-teal'>{p.role}</p>
                <p className='text-sm text-muted'>{p.note}</p>
              </Ext>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='font-display text-3xl font-extrabold sm:text-4xl'>Teknologi</h2>
        <div className='mt-8 space-y-6'>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className='mb-2 font-semibold'>{group}</h3>
              <div className='flex flex-wrap gap-2'>
                {items.map((i) => <span key={i} className='tag'>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const field = 'w-full rounded-lg border border-line bg-white px-4 py-3 focus:border-teal';

const Contact = () => (
  <section id='kontak' className='border-t border-line bg-white'>
    <div className='mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24'>
      <div>
        <h2 className='font-display text-3xl font-extrabold sm:text-4xl'>Punya sistem yang perlu dibangun?</h2>
        <p className='mt-3 max-w-md text-muted'>Ceritakan kebutuhan Anda. Saya balas lewat email.</p>
        <div className='mt-6 flex gap-5 text-3xl'>
          <Ext href={GITHUB} className='hover:text-teal'><FaGithub aria-label='GitHub' /></Ext>
          <Ext href={LINKEDIN} className='hover:text-teal'><FaLinkedin aria-label='LinkedIn' /></Ext>
        </div>
      </div>
      <form method='POST' action='https://getform.io/f/pbnroxrb' className='space-y-4'>
        <label className='block'><span className='mb-1 block font-medium'>Nama</span>
          <input className={field} type='text' name='name' required /></label>
        <label className='block'><span className='mb-1 block font-medium'>Email</span>
          <input className={field} type='email' name='email' required /></label>
        <label className='block'><span className='mb-1 block font-medium'>Pesan</span>
          <textarea className={field + ' h-32 resize-none'} name='message' required /></label>
        <button className='btn btn-primary w-full sm:w-auto'>Kirim pesan</button>
      </form>
    </div>
  </section>
);

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Systems />
      <Experience />
      <Contact />
    </main>
    <footer className='border-t border-line py-6 text-center text-sm text-muted'>© 2026 Reza Hakim</footer>
  </>
);

export default App;
