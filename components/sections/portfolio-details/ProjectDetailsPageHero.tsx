import PageHero from "@/components/shared/PageHero";
import { IImage } from "@/types/shared.types";
import { FC } from "react";

type Props = {
  category: string;
  title: string;
  description: string;
  image: IImage;
  year: string;
};
const ProjectDetailsPageHero: FC<Props> = ({
  category,
  description,
  image,
  title,
  year,
}) => {
  return (
    <PageHero
      eyebrow={category}
      title={title}
      description={description}
      backgroundImage={image}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: title },
      ]}
    >
      <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-6 text-sm">
        <div>
          <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
            Year
          </span>
          <p className="text-foreground font-medium">{year}</p>
        </div>
        <div>
          <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
            Category
          </span>
          <p className="text-foreground font-medium">{category}</p>
        </div>
      </div>
    </PageHero>
  );
};

export default ProjectDetailsPageHero;
