import React from 'react';

interface HeadingProps {
  heading?: string | null;
  level?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Heading';
}

const Heading: React.FC<HeadingProps> = ({ 
  heading, 
  level = 'h2' 
}) => {
  const renderHeading = () => {
    if (!heading) return null;
    
    switch (level) {
      case 'h1':
        return <h1 className="heading-text text-4xl font-bold mb-4">{heading}</h1>;
      case 'h2':
        return <h2 className="heading-text text-3xl font-bold mb-4">{heading}</h2>;
      case 'h3':
        return <h3 className="heading-text text-2xl font-bold mb-4">{heading}</h3>;
      case 'h4':
        return <h4 className="heading-text text-xl font-bold mb-4">{heading}</h4>;
      case 'h5':
        return <h5 className="heading-text text-lg font-bold mb-4">{heading}</h5>;
      default:
        return <h2 className="heading-text text-3xl font-bold mb-4">{heading}</h2>;
    }
  };

  return (
    <section className="c-heading-block my-8">
        <div className="o-container o-container--lg">
            {renderHeading()}
        </div>
    </section>
  );
};

export default Heading; 