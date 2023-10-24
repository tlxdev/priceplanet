import Link from 'next/link';
import { FC } from 'react';

interface NestedMenuProps {
  label?: string;
  items: { label: string; href: string }[];
}

const NestedMenu: FC<NestedMenuProps> = ({ label, items }) => {
  return (
    <div className="px-4 py-3">
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-700">
            <Link href={item.href} className="hover:text-gray-900 hover:bg-gray-50 block px-4 py-2">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NestedMenu;
