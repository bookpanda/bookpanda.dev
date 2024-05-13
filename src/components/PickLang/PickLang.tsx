import { GB, JP } from "country-flag-icons/react/3x2";

export const PickLang = () => {
  return (
    <div className="flex space-x-3">
      <div>
        <GB title="United States" className="w-8 rounded-sm  brightness-50" />
      </div>
      <div>
        <JP title="United States" className="w-8 rounded-sm" />
      </div>
    </div>
  );
};
