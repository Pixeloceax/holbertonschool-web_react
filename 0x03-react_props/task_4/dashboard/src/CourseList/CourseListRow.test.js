// import React from "react";
// import { render } from "@testing-library/react";
// import CourseListRow from "./CourseListRow";

// describe("CourseListRow", () => {
//   describe("when isHeader is true", () => {
//     it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
//       const { container } = render(
//         <table>
//           <tbody>
//             <CourseListRow isHeader={true} textFirstCell="Header" />
//           </tbody>
//         </table>
//       );
//       const thElement = container.querySelector("th");
//       expect(thElement).toHaveTextContent("Header");
//       expect(thElement).toHaveAttribute("colspan", "2");
//     });

//     it("renders two cells when textSecondCell is present", () => {
//       const { container } = render(
//         <table>
//           <tbody>
//             <CourseListRow
//               isHeader={true}
//               textFirstCell="Header 1"
//               textSecondCell="Header 2"
//             />
//           </tbody>
//         </table>
//       );
//       const thElements = container.querySelectorAll("th");
//       expect(thElements[0]).toHaveTextContent("Header 1");
//       expect(thElements[1]).toHaveTextContent("Header 2");
//     });
//   });

//   describe("when isHeader is false", () => {
//     it("renders correctly two td elements within a tr element", () => {
//       const { container } = render(
//         <table>
//           <tbody>
//             <CourseListRow
//               isHeader={false}
//               textFirstCell="Cell 1"
//               textSecondCell="Cell 2"
//             />
//           </tbody>
//         </table>
//       );
//       const trElement = container.querySelector("tr");
//       const tdElements = container.querySelectorAll("td");
//       expect(trElement).toBeInTheDocument();
//       expect(tdElements[0]).toHaveTextContent("Cell 1");
//       expect(tdElements[1]).toHaveTextContent("Cell 2");
//     });
//   });
// });
