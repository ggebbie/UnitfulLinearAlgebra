var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = UnitfulLinearAlgebra","category":"page"},{"location":"#UnitfulLinearAlgebra","page":"Home","title":"UnitfulLinearAlgebra","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for UnitfulLinearAlgebra.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [UnitfulLinearAlgebra]","category":"page"},{"location":"#Base.Matrix-Tuple{Union{AbstractUnitfulDimVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T}}","page":"Home","title":"Base.Matrix","text":"function Matrix(A::Union{AbstractUnitfulMatrix,AbstractUnitfulDimMatrix}) \n\nExpand A into array form\nUseful for tests, display\npp. 193, Hart\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.DimArray-Tuple{AbstractUnitfulDimVecOrMat}","page":"Home","title":"DimensionalData.DimArray","text":"DimensionalData.DimArray\n\nconvert UnitfulDimMatrix or UnitfulDimVector to DimArray\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.DSVD","page":"Home","title":"UnitfulLinearAlgebra.DSVD","text":"DSVD <: Factorization\n\nMatrix factorization type of the dimensioned singular value decomposition (DSVD) of a matrix A. This is the return type of dsvd(_), the corresponding matrix factorization function.\n\nIf F::DSVD is the factorization object, U, S, V and V⁻¹ can be obtained via F.U, F.S, F.V and F.V⁻¹, such that A = U * Diagonal(S) * V⁻¹. The singular values in S are sorted in descending order.\n\nIterating the decomposition produces the components U, S, and V.\n\nDifferences from SVD struct: Vt -> V⁻¹, U and V can have different types.\n\nFunctions available for DSVD: size, dsvdvals, inv.  Function available for SVD that would be good to have to DSVD: ldiv!, transpose.  ```\n\n\n\n\n\n","category":"type"},{"location":"#UnitfulLinearAlgebra.UnitfulDimMatrix","page":"Home","title":"UnitfulLinearAlgebra.UnitfulDimMatrix","text":"struct UnitfulDimMatrix\n\nBuilt on DimensionalData.DimArray.\nAdd `unitdims` for unit dimensions (range and domain).\nAdd `exact::Bool` which is true for geometric interpretation.\n\nstruct UnitfulDimMatrix{T,N,UD<:Tuple,D<:Tuple,R<:Tuple,A<:AbstractArray{T,N},Na,Me} <: AbstractUnitfulDimVecOrMat{T,N,UD,D,A}     data::A     unitdims::UD     dims::D     refdims::R     name::Na     metadata::Me     exact::Bool     UnitfulDimMatrix(data,unitdims,dims,refdims,name,metadata,exact) = (eltype(parent(data)) <: Quantity) ? error(\"units not allowed in UnitfulDimMatrix data field\") : new{eltype(data),ndims(data),typeof(unitdims),typeof(dims),typeof(refdims),typeof(data)}(data,unitdims,dims,refdims,name,metadata,exact)\n\n\n\n\n\n","category":"type"},{"location":"#UnitfulLinearAlgebra.UnitfulDimMatrix-Tuple{AbstractMatrix}","page":"Home","title":"UnitfulLinearAlgebra.UnitfulDimMatrix","text":"function UnitfulDimMatrix(A::AbstractMatrix)\n\nConstructor to make inexact UnitfulDimMatrix.\nSatisfies algebraic interpretation of multipliable\nmatrices. Doesn't add any metadata of a DimArray.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.UnitfulMatrix","page":"Home","title":"UnitfulLinearAlgebra.UnitfulMatrix","text":"struct UnitfulMatrix\n\nExtend DimArray to use dimensions for units, also add exact boolean flag\n\nstruct UnitfulMatrix{T,N,D<:Tuple,A<:AbstractArray{T,N}} <: AbstractUnitfulVecOrMat{T,N,D,A}     data::A     dims::D     exact::Bool end\n\n\n\n\n\n","category":"type"},{"location":"#UnitfulLinearAlgebra.UnitfulMatrix-Tuple{AbstractMatrix}","page":"Home","title":"UnitfulLinearAlgebra.UnitfulMatrix","text":"function UnitfulMatrix(A::AbstractMatrix)\n\nConstructor to make inexact UnitfulMatrix.\nSatisfies algebraic interpretation of multipliable\nmatrices.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:*-Tuple{AbstractUnitfulVecOrMat{T, 2} where T, Unitful.Quantity}","page":"Home","title":"Base.:*","text":"function *(A::AbstractUnitfulType,b)\n\nMatrix-scalar multiplication with units/dimensions.\nMust account for change in the unitrange when the\n scalar has units.\nHere, take product of dimension of the scalar and the unitrange.\nAlternatively, divide the domain by the dimension of the scalar. \nMatrix-scalar multiplication is commutative.\nResult is `exact` if input matrix is exact and scalar is dimensionless. \n\nfunction *(A,B)\n\nMatrix-matrix multiplication with units/dimensions.\nA*B represents two successive transformations.\nUnitrange of B should equal domain of A in geometric interpretation.\nUnitrange of B should be parallel to unitdomain of A in algebraic interpretation.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:+-Tuple{AbstractUnitfulVecOrMat, AbstractUnitfulVecOrMat}","page":"Home","title":"Base.:+","text":"function +(A,B)\n\nMatrix-matrix addition with units/dimensions.\nA+B requires the two matrices to have dimensional similarity.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:--Union{Tuple{T1}, Tuple{T2}, Tuple{AbstractUnitfulVecOrMat{T1}, AbstractUnitfulVecOrMat{T2}}} where {T2, T1}","page":"Home","title":"Base.:-","text":"function -(A,B)\n\nMatrix-matrix subtraction with units/dimensions.\nA-B requires the two matrices to have dimensional similarity.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:\\-Tuple{AbstractUnitfulVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 1} where T}","page":"Home","title":"Base.:\\","text":" function left divide\n\n Left divide of Multipliable Matrix.\n Reverse mapping from unitdomain to range.\n Is `exact` if input is exact.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:\\-Union{Tuple{T}, Tuple{LinearAlgebra.LU{T, <:AbstractUnitfulVecOrMat{T, 2} where T, Vector{Int64}}, AbstractUnitfulVecOrMat{T, 1} where T}} where T<:Number","page":"Home","title":"Base.:\\","text":"function ldiv(F::LU{T,MultipliableMatrix{T},Vector{Int64}}, B::AbstractVector) where T<:Number\n\nPerform matrix left divide on LU factorization object,\nwhere LU object contains unit information.\nDoesn't require LeftUniformMatrix.\n\n\n\n\n\n","category":"method"},{"location":"#Base.getproperty-Union{Tuple{T}, Tuple{LinearAlgebra.LU{T, <:AbstractUnitfulVecOrMat, Vector{Int64}}, Symbol}} where T","page":"Home","title":"Base.getproperty","text":"function getproperty(F::LU{T,<:AbstractMultipliableMatrix,Vector{Int64}}, d::Symbol) where T\n\nExtend LinearAlgebra.getproperty for AbstractUnitfulVecOrMat.\n\nLU factorization stores L and U together.\nExtract L and U while keeping consistent\nwith dimensional domain and range.\n\n\n\n\n\n","category":"method"},{"location":"#Base.inv-Tuple{AbstractUnitfulVecOrMat{T, 2} where T}","page":"Home","title":"Base.inv","text":" function inv\n\n Inverse of Multipliable Matrix.\n Only defined for nonsingular matrices.\n Inverse reverses mapping from unitdomain to range.\n Is `exact` if input is exact.\n\nHart, pp. 205.\n\n\n\n\n\n","category":"method"},{"location":"#Base.inv-Union{Tuple{LinearAlgebra.Eigen{T, V, S, U}}, Tuple{T}, Tuple{V}, Tuple{S}, Tuple{U}} where {U<:(AbstractVector), S<:(AbstractUnitfulVecOrMat{T, 2} where T), V, T<:Number}","page":"Home","title":"Base.inv","text":"Extend inv for Eigen factorizations of MultipliableMatrixs.     Only defined for matrices with uniform units (pp. 101, Hart, 1995). \n\n\n\n\n\n","category":"method"},{"location":"#Base.vec-Tuple{UnitfulLinearAlgebra.AbstractUnitfulType}","page":"Home","title":"Base.vec","text":"function vec(A::AbstractUnitfulType)\n\nreturn a Vector{Quantity}\nnote ambiguity whether this function should return a Vector{Quantity} or an `AbstractUnitfulType` with one column\n\nArguments\n\nA::AbstractUnitfulType: input matrix\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.Dimensions.LookupArrays.rebuild","page":"Home","title":"DimensionalData.Dimensions.LookupArrays.rebuild","text":"rebuild(A::UnitfulDimMatrix, data, [dims, refdims, name, metadata]) => UnitfulMatrix\nrebuild(A::UnitfulDimMatrix; kw...) => UnitfulMatrix\n\nRebuild a UnitfulDimMatrix with some field changes. All types that inherit from UnitfulMatrix must define this method if they have any additional fields or alternate field order.\n\nImplementations can discard arguments like refdims, name and metadata.\n\nThis method can also be used with keyword arguments in place of regular arguments.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.Dimensions.LookupArrays.rebuild-2","page":"Home","title":"DimensionalData.Dimensions.LookupArrays.rebuild","text":"rebuild(A::UnitfulMatrix, data, [dims, exact]) => UnitfulMatrix\nrebuild(A::UnitfulMatrix; kw...) => UnitfulMatrix\n\nRebuild a UnitfulMatrix with some field changes. All types that inherit from UnitfulMatrix must define this method if they have any additional fields or alternate field order.\n\nThis method can also be used with keyword arguments in place of regular arguments.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.rebuildsliced-Tuple{AbstractUnitfulDimVecOrMat, Vararg{Any}}","page":"Home","title":"DimensionalData.rebuildsliced","text":"rebuild(A::UnitfulDimMatrix, data, dims, exact) => UnitfulMatrix\nrebuild(A::UnitfulDimMatrix; kw...) => UnitfulMatrix\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.rebuildsliced-Tuple{AbstractUnitfulVecOrMat, Vararg{Any}}","page":"Home","title":"DimensionalData.rebuildsliced","text":"rebuild(A::UnitfulMatrix, data, dims, exact) => UnitfulMatrix\nrebuild(A::UnitfulMatrix; kw...) => UnitfulMatrix\n\nRebuild a UnitfulMatrix with new fields. Handling partial field update is dealt with in rebuild for AbstractDimArray (still true?).\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.cholesky-Tuple{AbstractUnitfulVecOrMat{T, 2} where T}","page":"Home","title":"LinearAlgebra.cholesky","text":"function cholesky(A::AbstractMultipliableMatrix)\n\nCholesky decomposition extended for matrices with units.\nRequires unit (or dimensionally) symmetric matrix.\nFunctions available for LinearAlgebra.Cholesky objects: `size`, ``, `inv`, `det`, `logdet` and `isposdef`.\nFunctions available for UnitfulLinearAlgebra.Cholesky objects: `size`, `det`, and `isposdef`.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.det-Tuple{AbstractUnitfulDimVecOrMat{T, 2} where T}","page":"Home","title":"LinearAlgebra.det","text":"function det\n\nUnitful matrix determinant.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.det-Tuple{UnitfulLinearAlgebra.AbstractUnitfulType}","page":"Home","title":"LinearAlgebra.det","text":"function det\n\nUnitful matrix determinant.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.diag-Union{Tuple{Union{AbstractUnitfulDimVecOrMat{T, 2}, AbstractUnitfulVecOrMat{T, 2}}}, Tuple{T}} where T<:Number","page":"Home","title":"LinearAlgebra.diag","text":"function diag(A::AbstractUnitfulMatrix)\n\nDiagonal elements of matrix with units.\n\nUsual LinearAlgebra.diag function is not working due to different type elements on diagonal\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.diagm-Tuple{AbstractVector, UnitfulLinearAlgebra.Units, UnitfulLinearAlgebra.Units}","page":"Home","title":"LinearAlgebra.diagm","text":"function diagm(v::AbstractVector,r::Unitful.Units,d::Unitful.Units; exact = false)\n\nConstruct diagonal matrix with units where the diagonal has elements `v`.\nIf `v` has units, check that they conform with dimensional unit range `r`\n and dimensional unit domain `d`. Works for square or non-square matrices.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.dot-Tuple{Union{AbstractUnitfulDimVecOrMat{T, 1} where T, AbstractUnitfulVecOrMat{T, 1} where T}, Union{AbstractUnitfulDimVecOrMat{T, 1} where T, AbstractUnitfulVecOrMat{T, 1} where T}}","page":"Home","title":"LinearAlgebra.dot","text":"function dot\n\nUnitful vector (inner) dot product.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.eigen-Tuple{AbstractUnitfulVecOrMat{T, 2} where T}","page":"Home","title":"LinearAlgebra.eigen","text":"function eigen(A::T;permute::Bool=true, scale::Bool=true, sortby::Union{Function,Nothing}=eigsortby) where T <: AbstractMultipliableMatrix\n\nThin wrapper for `UnitfulLinearAlgebra.eigen` with same keyword arguments as `LinearAlgebra.eigen`.\nThere are multiple ways to distribute the units amongst the values and vectors.\nHere, physical intuition and the equation 𝐀𝐱 = λ𝐱\ndictate that the units of the eigenvectors are equal to the unit domain of 𝐀 (pp. 206, Hart, 1995).\nOnly squarable matrices have eigenstructure (pp. 96, Hart, 1995).\nIdeally the AbstractArray interface would automatically handle `eigen`,\nbut there is an unsolved issue with Unitful conversions.\nThe following functions are available for `Eigen` objects:  [`det`](@ref), [`inv`](@ref) and [`isposdef`](@ref). Some are restricted to uniform matrices.\n`eigvals` of Eigen struct also available.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.isposdef-Union{Tuple{LinearAlgebra.Eigen{T, V, S, U}}, Tuple{T}, Tuple{V}, Tuple{S}, Tuple{U}} where {U<:(AbstractVector), S<:(AbstractUnitfulVecOrMat{T, 2} where T), V, T<:Number}","page":"Home","title":"LinearAlgebra.isposdef","text":"Extend isposdef for Eigen factorizations of MultipliableMatrixs.     Should the units be stripped out of the function?     Only defined for matrices with uniform units (pp. 101, Hart, 1995). \n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.lu-Tuple{AbstractUnitfulVecOrMat}","page":"Home","title":"LinearAlgebra.lu","text":"function lu(A::AbstractUnitfulVecOrMat{T})\n\nExtend `lu` factorization to AbstractMultipliableMatrix.\nRelated to Gaussian elimination.\nStore dimensional domain and range in \"factors\" attribute\neven though this is not truly a MultipliableMatrix.\nReturns `LU` type in analogy with `lu` for unitless matrices.\nBased on LDU factorization, Hart, pp. 204.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.svd-Tuple{AbstractUnitfulVecOrMat{T, 2} where T}","page":"Home","title":"LinearAlgebra.svd","text":"svd(A; full::Bool = false, alg::Algorithm = default_svd_alg(A)) -> SVD\n\nSingular value decomposition (SVD) of `AbstractMultipliableMatrix`.\nOnly exists for uniform matrices (pp. 124, Hart, 1995).\nFunctions for `SVD{AbstractMultipliableMatrix}` object: `inv`, `size`, `adjoint`, `svdvals`.\nNot implemented: `ldiv!`.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.convert_unitdomain-Tuple{AbstractUnitfulVecOrMat{T, 2} where T, UnitfulLinearAlgebra.Units}","page":"Home","title":"UnitfulLinearAlgebra.convert_unitdomain","text":"function convert_unitdomain(A, newdomain)\n\nWhen using the geometric interpretation of matrices,\nit is useful to convert the dimensional domain of the\nmatrix to match the expected vectors during multiplication.\nHere we set the matrix to `exact=true` after this step.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.convert_unitrange-Tuple{AbstractUnitfulVecOrMat{T, 2} where T, UnitfulLinearAlgebra.Units}","page":"Home","title":"UnitfulLinearAlgebra.convert_unitrange","text":"function convert_unitrange(A, newrange)\n\nWhen using the geometric interpretation of matrices,\nit is useful to convert the dimensional range of the\nmatrix to match the desired output of multiplication.\nHere we set the matrix to `exact=true` after this step.\nPermits MatrixType to change.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.describe-Tuple{UnitfulMatrix}","page":"Home","title":"UnitfulLinearAlgebra.describe","text":"function describe(A::UnitfulMatrix)\n\n Information regarding the type of multipliable matrix.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.dimensionless-Tuple{Union{AbstractUnitfulDimVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T}}","page":"Home","title":"UnitfulLinearAlgebra.dimensionless","text":" function dimensionless(A)\n\n Not all dimensionless matrices have\n dimensionless domain and range.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.dottable-Tuple{Any, Any}","page":"Home","title":"UnitfulLinearAlgebra.dottable","text":"function dottable(a,b)\n\nAre two quantities dimensionally compatible\nto take a dot product?\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.dsvd-Tuple{AbstractUnitfulVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T}","page":"Home","title":"UnitfulLinearAlgebra.dsvd","text":"function dsvd(A::AbstractMultipliableMatrix,Prange::UnitSymmetricMatrix,Pdomain::UnitSymmetricMatrix;full=false,alg::LinearAlgebra.Algorithm = LinearAlgebra.default_svd_alg(A.numbers)) \n\nDimensioned singular value decomposition (DSVD).\nAppropriate version of SVD for non-uniform matrices.\n`svd` can be computed for `Number`s, `Adjoint`s, `Tranpose`s, and `Integers`; `dsvd` doesn't yet implement these.\n\nInput\n\nA::AbstractMultipliableMatrix\nPr::UnitSymmetricMatrix: square matrix defining norm of range\nPd::UnitSymmetricMatrix: square matrix defining norm of domain\nfull=false: optional argument\nalg: optional argument for algorithm\n\nOutput:\n\nF::DSVD: Dimensioned SVD object with units that can be deconstructed\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.endomorphic-Tuple{Matrix}","page":"Home","title":"UnitfulLinearAlgebra.endomorphic","text":"function endomorphic(A)::Bool\n\nEndomorphic matrices have a particular structure\n of the units/dimensions in the array.\nIt maps dimensioned vector space to itself.\nEquivalent unit (dimensional) range and domain.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.exact-Tuple{UnitfulLinearAlgebra.AbstractUnitfulType}","page":"Home","title":"UnitfulLinearAlgebra.exact","text":"function exact(A)\n\nexact=true: geometric interpretation of unitdomain and unitrange\nexact=false: algebraic interpretation\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.getindexqty-Tuple{Union{AbstractUnitfulDimVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T}, Int64, Int64}","page":"Home","title":"UnitfulLinearAlgebra.getindexqty","text":"function getindexqty\n\nGet entry value of matrix including units.\nNote: Calling B::UnitfulMatrix[i,j] doesn't currently return the units.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.identitymatrix-Tuple{Any}","page":"Home","title":"UnitfulLinearAlgebra.identitymatrix","text":"function identitymatrix(dimrange)\n\nInput: dimensional (unit) range.\n`A + I` only defined when `endomorphic(A)=true`\nWhen accounting for units, there are many identity matrices.\nThis function returns a particular identity matrix\ndefined by its dimensional range.\nHart, pp. 200.\n\nMaybe change the name to UnitfulI?\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.left_uniform-Tuple{UnitfulLinearAlgebra.AbstractUnitfulType}","page":"Home","title":"UnitfulLinearAlgebra.left_uniform","text":"function left_uniform(A)\n\nDefinition: uniform unitrange of A\nLeft uniform matrix: output of matrix has uniform units\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.multipliable-Tuple{Matrix}","page":"Home","title":"UnitfulLinearAlgebra.multipliable","text":"function multipliable(A)::Bool\n\nIs an array multipliable?\nIt requires a particular structure of the units/dimensions in the array.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.parallel-Tuple{Any, Any}","page":"Home","title":"UnitfulLinearAlgebra.parallel","text":"function parallel\n\nVector a is dimensionally parallel to vector b if\nthey have the same length and a consistent dimensional\nchange relates corresponding components.\nGuaranteed if two vectors are dimensionally similar.\nTrue for scalars in all cases. \n\npp. 188, Hart\nNote: Hart uses ≈, but this conflicts with an existing Julia function.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.right_uniform-Tuple{UnitfulLinearAlgebra.AbstractUnitfulType}","page":"Home","title":"UnitfulLinearAlgebra.right_uniform","text":"function right_uniform(A)\n\nDoes the unitdomain of A have uniform dimensions?\nRight uniform matrix: input of matrix must have uniform units\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.setindex!-Tuple{AbstractUnitfulVecOrMat{T, 2} where T, Unitful.Quantity, Int64, Int64}","page":"Home","title":"UnitfulLinearAlgebra.setindex!","text":"function setindex!(A::AbstractUnitfulMatrix,v,i,j)\n\nSet element (i,j) of a multipliable matrix.\nPart of the AbstractArray interface.\n\n#Input\n\nA::AbstractUnitfulMatrix\nv: new value\ni::Integer: row index\nj::Integer: column index\n\n#Output\n\nQuantity: numerical value and units\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.similarity-Tuple{Any, Any}","page":"Home","title":"UnitfulLinearAlgebra.similarity","text":"function similarity(a,b)::Bool\n\nDimensional similarity of vectors, a binary relation\nRead \"a has the same dimensional form as b\"\n`a` and `b` may still have different units.\nA stronger condition than being parallel.\npp. 184, Hart\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.singular-Tuple{Union{AbstractUnitfulDimVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T}}","page":"Home","title":"UnitfulLinearAlgebra.singular","text":"function singular(A)\n\nIs a square matrix singular? If no, then it is invertible.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.squarable-Tuple{UnitfulMatrix}","page":"Home","title":"UnitfulLinearAlgebra.squarable","text":"function squarable(A::Matrix)\n\nA squarable matrix is one where 𝐀² is defined.\nUnit (dimensional) range and domain are parallel.\nKey for solving difference and differential equations.\nHave eigenstructure.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.square-Tuple{T} where T<:(AbstractMatrix)","page":"Home","title":"UnitfulLinearAlgebra.square","text":"function square(A)\n\nsize(A)[1] == size(A)[2]\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.trace-Tuple{AbstractUnitfulVecOrMat{T, 2} where T}","page":"Home","title":"UnitfulLinearAlgebra.trace","text":"function trace(A)\n\nTrace = sum of diagonal elements of a square matrix\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.uniform-Tuple{T} where T<:Number","page":"Home","title":"UnitfulLinearAlgebra.uniform","text":"function uniform(a)\n\nIs the dimension of this quantity uniform?\n\nThere must be a way to inspect the Unitful type to answer this.\nUniform matrix: All entries have the same units\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.unit_symmetric-Tuple{UnitfulLinearAlgebra.AbstractUnitfulType}","page":"Home","title":"UnitfulLinearAlgebra.unit_symmetric","text":"function unit_symmetric(A::Matrix)\n\n`UnitSymmetricMatrix`s have units that are symmetric about the main diagonal and define weighted norms. \nDefinition: inverse dimensional range and dimensional domain are parallel.\nCalled \"dimensionally symmetric\" by Hart, 1995.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.unitdims-Tuple{AbstractUnitfulVecOrMat}","page":"Home","title":"UnitfulLinearAlgebra.unitdims","text":"function unitdims(A::AbstractUnitfulVecOrMat) = dims(A)\n\nReturn tuple -> (unitrange, unitdomain)\n\nfor UnitfulMatrix, unit information overrides the `dims` function.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.unitdomain-Tuple{Union{AbstractUnitfulDimVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T}}","page":"Home","title":"UnitfulLinearAlgebra.unitdomain","text":"function unitdomain(A)\n\nFind the dimensional (unit) domain of a matrix\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.unitless-Tuple{Union{AbstractUnitfulDimVecOrMat{T, 2} where T, AbstractUnitfulVecOrMat{T, 2} where T}}","page":"Home","title":"UnitfulLinearAlgebra.unitless","text":" function unitless(A)\n\nSome quantities are dimensionless but still have units.\n\n\n\n\n\n","category":"method"},{"location":"#UnitfulLinearAlgebra.unitrange-Tuple{UnitfulLinearAlgebra.AbstractUnitfulType}","page":"Home","title":"UnitfulLinearAlgebra.unitrange","text":"function unitrange(A)\n\nFind the dimensional (unit) range of a matrix\n\n\n\n\n\n","category":"method"}]
}
