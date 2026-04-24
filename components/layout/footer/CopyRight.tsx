import { APP_NAME } from "@/constants/app.constants";

const CopyRight = () => {
  return (
    <div className="border-foreground/10 mt-16 flex items-center justify-center gap-4 border-t pt-8">
      <p className="text-foreground/30 text-xs">
        © {new Date().getFullYear()}{" "}
        <span className="font-playfair text-accent font-bold">{APP_NAME}</span>.
        All rights reserved.
      </p>
      {/* <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Terms
            </Link>
          </div> */}
    </div>
  );
};

export default CopyRight;
