import '@/components/landing-frame.css';

type LandingFrameProps = {
  bodyClass?: string;
  children: React.ReactNode;
};

export default function LandingFrame({ bodyClass, children }: LandingFrameProps) {
  return <div className={bodyClass ? `landing-frame ${bodyClass}` : 'landing-frame'}>{children}</div>;
}
