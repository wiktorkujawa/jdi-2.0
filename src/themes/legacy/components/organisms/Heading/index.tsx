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
        return <h1 className="text-h1">{heading}</h1>;
      case 'h2':
        return <h2 className="text-h2">{heading}</h2>;
      case 'h3':
        return <h3 className="text-h3">{heading}</h3>;
      case 'h4':
        return <h4 className="text-h4">{heading}</h4>;
      case 'h5':
        return <h5 className="text-h5">{heading}</h5>;
      default:
        return <h2 className="text-h2">{heading}</h2>;
    }
  };

  return (
    <section className="c-heading-block">
      <div className="o-container o-container--lg">
        {renderHeading()}
      </div>
    </section>
  );
};

export default Heading; 