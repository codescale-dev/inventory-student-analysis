import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/frameworks/components';
import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  links: {
    name: string;
    link: string;
  }[];
  items: {
    name: string;
  }[];
}

export const BreadcrumbContent: FC<Props> = ({ items, links }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((item, index) => (
          <Fragment key={`breadcrumb-link-${index}`}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={item.link}>{item.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        {items.map((item, index) => (
          <Fragment key={`breadcrumb-item-${index}`}>
            <BreadcrumbItem>
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            </BreadcrumbItem>
            {items.length - 1 !== index && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
