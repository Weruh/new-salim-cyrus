import { ImgHTMLAttributes, ReactNode, useState } from 'react';

type FallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: ReactNode;
  priority?: boolean;
};

const ImageWithFallback = ({ fallback, priority, loading, onError, ...props }: FallbackProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border-2 border-[color:var(--brand)] bg-[color:var(--bg)] p-6">
        {fallback ?? <span className="text-sm font-medium text-[color:var(--brand)]">Image unavailable</span>}
      </div>
    );
  }

  const resolvedLoading = priority ? 'eager' : loading ?? 'lazy';

  return (
    <img
      {...props}
      loading={resolvedLoading}
      onError={(event) => {
        onError?.(event);
        setHasError(true);
      }}
    />
  );
};

export default ImageWithFallback;
