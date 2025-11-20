import { Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

const ratingData = [
  { stars: 5, count: 142, percentage: 71 },
  { stars: 4, count: 38, percentage: 19 },
  { stars: 3, count: 12, percentage: 6 },
  { stars: 2, count: 6, percentage: 3 },
  { stars: 1, count: 2, percentage: 1 },
];

export function CustomerRating() {
  const averageRating = 4.6;
  const totalReviews = 200;

  return (
    <Card className="h-full gap-3">
      <CardHeader className="pb-0">
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
          Customer Rating
          <TrendingUp className="h-4 w-4 text-green-600 ml-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        <div className="flex items-center gap-4 p-4  rounded-lg">
          <div className="text-3xl font-bold text-yellow-600">
            {averageRating}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= averageRating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted-foreground">
              Based on {totalReviews} reviews
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="font-medium">Rating Breakdown</h5>
          {ratingData.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-12">
                <span className="text-sm font-medium">{rating.stars}</span>
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              </div>
              <Progress value={rating.percentage} className="flex-1 h-2" />
              <div className="w-16 text-right">
                <span className="text-sm font-medium">{rating.count}</span>
                <span className="text-xs text-muted-foreground ml-1">
                  ({rating.percentage}%)
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t  rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">This months improvement</span>
            <span className="text-green-600 font-medium">+12%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Compared to last month
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
